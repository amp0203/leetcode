//Defanging an IP Address

var defangIPaddr = function (address) {
    return address.replaceAll('.', '[.]');
};
