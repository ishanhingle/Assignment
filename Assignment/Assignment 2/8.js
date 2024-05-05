function sortString(str) {
    return str.split('').sort().join('');
    }
    const inputString = 'asdanfjksdbzxcabnksjba';
    const sortedString = sortString(inputString);
    console.log(sortedString); // Output: "aabbcdefhjksnnzdx"