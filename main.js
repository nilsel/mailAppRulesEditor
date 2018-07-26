'use strict'

const fs = require('fs');
const plist = require('plist');
 
// now use the `parse()` and `build()` functions
// var val = plist.parse('<plist><string>Hello World!</string></plist>');

// const plistFile = readFileSync('/Users/nils/Library/Mail/V5/MailData/SyncedRules.plist')
const plistFile = fs.readFileSync('./SyncedRulesTest.plist').toString();

const plistData = plist.parse(plistFile);

// let's try to modify some data
plistData.forEach(element => {
    // console.log(element.RuleName.toUpperCase());
    element.RuleName = element.RuleName.toUpperCase();
});

const outputData = plist.build(plistData);

console.log(outputData);