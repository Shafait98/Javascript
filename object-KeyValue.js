let computer = 
{
brand: 'Asus',
processor: 'Intel core-i7 8750H',
motherboard: 'Asus Tuf gaming series',
ram: '16GB LP DDR5',
hdd: '1TB',
ssd: '128GB',
gpu: 'Intel UHD Graphics 630',
additionalGpu: 'Nvidia Geforce gtx 1050 ti',
os: 'Windows 11 Home',
size: '15.6 inch'
};

let keys = Object.keys(computer); // find all the keys of an object
console.log(keys);

let value = Object.values(computer); // find all the values of an object
console.log(value);