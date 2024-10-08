# -*- coding: utf-8 -*-
"""
-------------------------------------------------
   File Name：     map_to_pgm
   Description :
   Author :       yyang52
   date：          1/29/24
-------------------------------------------------
   Change Activity:
                   1/29/24:
-------------------------------------------------
"""
__author__ = 'yyang52'

def adjust_x(lst, value):
    return [int((x - value)/0.05) for x in lst]

def adjust_y(lst, value):
    return [(118-int((x - value)/0.05)) for x in lst]

# Example of this file being used
# Suppose you have a dataframe with x and y coordinates
# df = pd.DataFrame({
#     'x': [1, 2, 3, 4, 5],
#     'y': [1, 2, 3, 4, 5]
# })
# and you want to convert them to the map coordinates
# You can use the following code:
# x_values = adjust_x(df["x"].values, -5) # -5 is the x origin of the map refer to the yaml file
# y_values = adjust_y(df["y"].values, -1.25) # -1.25 is the y origin of the map refer to the yaml file
