pip install geopandas matplotlib plotly

pip install geopandas==0.12.0 fiona==1.8.22

import pandas as pd
import numpy as np
import geopandas as gpd

world = gpd.read_file(gpd.datasets.get_path('naturalearth_lowres'))