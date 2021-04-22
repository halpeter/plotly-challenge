// Loading in and inspecting data
d3.json('/../../data/samples.json').then((data) => {
    //read the data
    console.log(data);
    });

// select html divs and save as variables
var barChart = d3.select("#bar");
var bubbleChart = d3.select("#bubble");
var idSelect = d3. select("#selDataset");

// Create the dropdown menu
function init() {
    // Read in data from json file
    d3.json('/../../data/samples.json').then((data => {
        // Loop through names to get dropdown menu items
        data.names.forEach((name => {
            var option = idSelect.append('option');
            option.text(name);
        }));
        // Set first ID as a variable to use as the default
        var firstID = idSelect.property('value')
        plotCharts(firstID);
    }));
}

// Build Charts based on the selected OTU ID
function  plotCharts(id) {
    // Read in data from json file
    d3.json('/../../data/samples.json').then((data => {
        var idSample = data.samples.filter(s => s.id == id)[0];
        // Define arrays to hold data
        var otu_ids = [];
        var otu_labels = [];
        var sample_values = [];

        Object.entries(idSample).forEach(([key, value]) => {
            // Use the switch function to swtich between each case
            switch(key) {
                case "otu_ids":
                    otu_ids.push(value);
                    break;
                case "otu_labels":
                    otu_labels.push(value);
                    break;
                case "sample_values":
                    sample_values.push(value);
                    break;
                default:
                    break;
            }
        });
        // Get the top 10 OTUs using the sort and slice functions
        // Otu Ids 
        var sortedOtuIds = otu_ids[0].sort((a, b) => b.otu_ids - a.otu_ids);
        console.log(sortedOtuIds)
        var topTenOtuIds = sortedOtuIds.slice(0, 10).reverse();
        console.log(topTenOtuIds)
        // OTU Label
        var sortedOtuLabels = otu_labels[0].sort((a, b) => b.otu_labels - a.otu_labels);
        var topTenOtuLabels = sortedOtuLabels.slice(0, 10).reverse();
        // Sample Values
        var sortedSampleValues = sample_values[0].sort((a, b) => b.sample_values - a.sample_values);
        var topTenSampleValues = sortedSampleValues.slice(0, 10).reverse();

        // Plot Bar Chart
        var traceBar = {
            x: topTenSampleValues,
            y: topTenOtuIds,
            text: topTenOtuLabels,
            type: 'bar',
            orientation: 'h',
        };

        // data
        var dataBar = [traceBar];

        // layout
        var layoutBar = {
            height: 500, 
            width: 600, 
            title: {
                text: `Top 10 OTU's`
            }
        }

        // Use plotly to create bar chart
        Plotly.newPlot('bar', dataBar, layoutBar)

        // Plot Bubble Chart
        var traceBubble = {
            x: otu_ids[0],
            y: sample_values[0],
            text: otu_labels[0],
            mode: 'markers',
            marker: {
                size: sample_values[0],
                color: otu_ids[0],
            }
        };

        // data
        var dataBubble = [traceBubble];

        // Use plotly to create bubble char
        Plotly.newPlot('bubble', dataBubble)
    }))   
}

init();

// update function when item is changed
function optionChanged(id) {
    plotCharts(id)
}

