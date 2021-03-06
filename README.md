# Plot.ly Homework - Belly Button Biodiversity

In this challenge, I built an interactive dashboard to explore the [Belly Button Biodiversity dataset](http://robdunnlab.com/projects/belly-button-biodiversity/), which catalogs the microbes that colonize human navels.

The dataset reveals that a small handful of microbial species (also called operational taxonomic units, or OTUs, in the study) were present in more than 70% of people, while the rest were relatively rare.

## Plotly

1. I used the D3 library to read in `samples.json`.

2. I created a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.

* I used `sample_values` as the values for the bar chart.

* I used `otu_ids` as the labels for the bar chart.

* I used `otu_labels` as the hovertext for the chart.

3. I created a bubble chart that displays each sample.

* I use `otu_ids` for the x values.

* I use `sample_values` for the y values.

* I use `sample_values` for the marker size.

* I use `otu_ids` for the marker colors.

* I use `otu_labels` for the text values.

4. I displayed the sample metadata, i.e., an individual's demographic information.

5. I displayed each key-value pair from the metadata JSON object somewhere on the page.

6. I updated all of the plots any time that a new sample is selected.

