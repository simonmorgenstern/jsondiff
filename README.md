# jsondiff
## Compare two JSON Files for differences

> Some parts of the code were inspired by https://gomakethings.com/getting-the-differences-between-two-objects-with-vanilla-js/
and by https://gist.github.com/shawndumas/6194339

# How to use the script
Run via node js with: `node jsondiff.js file1.json file2.json` 

> As all extra modules are part of the node.js core there is no need to 
> install extra dependencies

# What the script is doing
The script will compare the Objects for: 
1. added keys
2. changed values
3. removed keys

The results will be written into new `differences.json` file. 



