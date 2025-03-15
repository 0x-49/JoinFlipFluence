import os

# Define the directories to search
directories = [
    r"C:\personal\LandingPage Affialte SEO\JoinFlipFluence\src",
    r"C:\personal\LandingPage Affialte SEO\JoinFlipFluence"
]

# Output file
output_file = r"C:\personal\LandingPage Affialte SEO\JoinFlipFluence\Code_Combined.txt"

# Open the output file in write mode
with open(output_file, 'w', encoding='utf-8') as outfile:
    # Traverse each directory
    for directory in directories:
        for root, dirs, files in os.walk(directory):
            # Skip 'node_modules' and 'dist' directories
            if 'node_modules' in root or 'dist' in root or 'public' in root or '.next' in root:
                continue
            for file in files:
                # Construct the full file path
                file_path = os.path.join(root, file)
                # Check if the file is a code file (you can adjust the extensions as needed)
                if file.endswith(('.py', '.js', '.html', '.css', '.java', '.c', '.cpp', '.txt','.json','.md','.msj','.tsx','.ts')):
                    # Write the file path to the output file
                    outfile.write(f"File: {file_path}\n")
                    # Read and write the file contents
                    with open(file_path, 'r', encoding='utf-8') as infile:
                        outfile.write(infile.read())
                        outfile.write("\n\n")  # Add a newline for separation between files

print("Code combined successfully into Code_Combined.txt")