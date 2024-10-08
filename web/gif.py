import os
from PIL import Image
import re

# Folder containing PNG files
folder_path = 'Your file name path'

# Output GIF file name
output_gif = 'Your target file path'

# List to hold all images
images = []

# Regular expression to extract numbers from filenames
pattern = re.compile(r'router_(\d+)\.png')

# Function to extract numerical value for sorting
def extract_number(file_name):
    match = pattern.search(file_name)
    if match:
        return int(match.group(1))
    return -1

# Get all PNG files and sort them numerically
file_names = sorted([f for f in os.listdir(folder_path) if f.endswith('.png')], key=extract_number)

# Loop through sorted files and open them
for file_name in file_names:
    file_path = os.path.join(folder_path, file_name)
    print(file_name)
    img = Image.open(file_path)
    images.append(img)

# Save as GIF
images[0].save(output_gif, save_all=True, append_images=images[1:], duration=240, loop=0)

print(f"GIF created successfully and saved as {output_gif}")
