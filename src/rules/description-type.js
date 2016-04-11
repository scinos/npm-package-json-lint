"use strict";

let LintIssue = require("./../LintIssue");
let isString = require("./../validators/type").isString;
const lintId = "description-type";
const lintType = "error";
const nodeName = "description";
const message = "Type should be a string";
const ruleType = "type";

let lint = function(packageJsonData) {
  if (!isString(packageJsonData, nodeName)) {
    return new LintIssue(lintId, lintType, nodeName, message);
  }

  return true;
};

module.exports.lint = lint;
module.exports.lintType = lintType;
module.exports.ruleType = ruleType;