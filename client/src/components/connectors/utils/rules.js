import rulesConfig, { ruleAttr } from './rulesConfig';

const ruleMainSeperator = '<_>';

const ruleDataSeperator = '<;>';
// const wordSeperator = '<;>';
// const wordReplaceGroupSeperator = '<;>';
// const paramValueGroupSeperator = '<;>';
// const urlSeperator = '<;>';
// const mediaSeperator = '<;>';

const ruleDataPairSeperator = '<:>';
// const wordReplaceSeperator = '<:>';
// const paramValueSeperator = '<:>';

const ruleOptionCahr = '<>>';
// const messageNextLineCharacter = '<>>';

// eslint-disable-next-line
const generalSeperator = '<|>';

// eslint-disable-next-line
const paramOptionalChar = '<?>';

export const getRuleElem = (rule) => {
  rule = rule.split(ruleMainSeperator);

  const ruleName = getRuleName(rule[0], rule[1]);

  return <div>{ruleName}</div>;
};

const decode = (rule) => {
  const arr = rule.split(ruleMainSeperator);

  const ruleName = getRuleName(arr[0], arr[1]);

  const ruleId = String(arr[0]) + String(arr[1]);

  const attrs = ruleAttr[`id${ruleId}`];

  let ruleData = [];

  const extras = {};

  const ruleDataString = arr[2];

  if (attrs.hasData) {
    const datas = ruleDataString.split(ruleDataSeperator);

    if (attrs.isDataPair) {
      const dataPairs = datas.map((d) => {
        const pair = d.split(ruleDataPairSeperator);

        return [pair[0], pair[1]];
      });

      ruleData = [...dataPairs];
    } else {
      if (attrs.hasOption) {
        // only rule 14 15
        if (ruleDataString.endsWith(ruleOptionCahr)) {
          extras.option = true;
        }

        const dataString = ruleDataString.substring(
          0,
          ruleDataString.length - ruleOptionCahr.length
        );

        ruleData = [dataString];
      } else {
        ruleData = [...datas];
      }
    }
  }

  return {
    ...attrs,
    ...extras,
    name: ruleName,
    id: ruleId,
    data: ruleData,
    ds: ruleDataString,
    fs: rule,
  };
};

const encode = (rule) => {
  let arr = [];

  arr.push(rule.id.charAt(0));

  arr.push(rule.id.slice(1));

  let dataStr = '';

  if (!rule.hasData) {
    dataStr = 'n';
  } else {
    if (rule.isDataPair) {
      dataStr = rule.data.map(arr => arr.join(ruleDataPairSeperator)).join(ruleDataSeperator)
    } else {
      dataStr = rule.data.join(ruleDataSeperator);
    }
  }

  arr.push(dataStr);

  const str = arr.join(ruleMainSeperator);

  return str;
};

export const decodeRules = (rules) => {
  return rules.map((rule) => decode(rule));
};

export const encodeRules = (rules) => {
  return rules.map((rule) => encode(rule));
};

const getRuleName = (ruleCode, ruleOptionCode) => {
  const code = Number(ruleCode) - 1;
  const option = Number(ruleOptionCode) - 1;

  return rulesConfig[code][option];
};

// const shit = {
//   id: '11',
//   name: '',
//   hasData: true,
//   data: ['string', 'string'],
//   hasParam: false,
//   params: [],
//   hasOption: false,
//   option: true,
//   hasCheckList: false,
//   checkList: {
//     image: true,
//     video: true,
//     document: true,
//     audio: true,
//   },
// };
