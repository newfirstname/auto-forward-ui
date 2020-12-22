/*
  ruleAttr description:

  id<n> : { => n is id if the rule where first number is rule code and the rest is rule option
    hasdata: determine if rule has to cary data,
    hasDataOption: only in 23 24 27 28, detect if each data is optional,
    hasOption: only in 14 & 15 ( add new line ),
    hasParam: only in 24 27 28 , add the param that rule has to carry ( bitly token & ronoko id ),
    hasCheckList: only 32 33 34 , rule data is enum,
    isDataPair: data come in pair ( if true instead of stringm data will be array of two strings ),
  }
*/

export const ruleAttr = {
  id11: {
    hasData: true,
    hasDataOption: false,
    hasOption: false,
    hasParam: false,
    hasCheckList: false,
    isDataPair: false,
    name: 'words white list',
    data: [],
    id: '11',
    color: '#6c9',
    description: 'rule description',
  },
  id12: {
    hasData: true,
    hasDataOption: false,
    hasOption: false,
    hasParam: false,
    hasCheckList: false,
    isDataPair: false,
    name: 'word black list',
    data: [],
    id: '12',
    color: '#6c9',
    description: 'the messages containing these word will be ignored',
  },
  id13: {
    hasData: true,
    hasDataOption: false,
    hasOption: false,
    hasParam: false,
    hasCheckList: false,
    isDataPair: true,
    name: 'replace words',
    data: [],
    id: '13',
    color: '#6c9',
    description: <div className='text-danger'>please use ":" to seperate words</div>,
  },
  id14: {
    hasData: true,
    hasDataOption: false,
    hasOption: true,
    hasParam: false,
    hasCheckList: false,
    isDataPair: false,
    name: 'add before message',
    data: [],
    id: '14',
    color: '#6c9',
    description: 'rule description',
  },
  id15: {
    hasData: true,
    hasDataOption: false,
    hasOption: true,
    hasParam: false,
    hasCheckList: false,
    isDataPair: false,
    name: 'add after message',
    data: [],
    id: '15',
    color: '#6c9',
    description: 'rule description',
  },
  id16: {
    hasData: false,
    hasDataOption: false,
    hasOption: false,
    hasParam: false,
    hasCheckList: false,
    isDataPair: false,
    name: 'Clear formatting',
    id: '16',
    color: '#6c9',
    description: 'rule description',
  },
  id17: {
    hasData: false,
    hasDataOption: false,
    hasOption: false,
    hasParam: false,
    hasCheckList: false,
    isDataPair: false,
    name: 'Clear emojies',
    id: '17',
    color: '#6c9',
    description: 'rule description',
  },
  id21: {
    hasData: false,
    hasDataOption: false,
    hasOption: false,
    hasParam: false,
    hasCheckList: false,
    isDataPair: false,
    name: 'Ban posts with link',
    id: '21',
    color: '#c96',
    description: 'rule description',
  },
  id22: {
    hasData: false,
    hasDataOption: false,
    hasOption: false,
    hasParam: false,
    hasCheckList: false,
    isDataPair: false,
    name: 'Remove links from posts ',
    id: '22',
    color: '#c96',
    description: 'rule description',
  },
  id23: {
    disabled: true,
    hasData: true,
    hasDataOption: true,
    hasOption: false,
    hasParam: false,
    hasCheckList: false,
    isDataPair: true,
    name: 'Change params in links ',
    data: [],
    id: '23',
    color: '#c96',
    description: 'rule description',
  },
  id24: {
    disabled: true,
    hasData: true,
    hasDataOption: true,
    hasOption: false,
    hasParam: true,
    hasCheckList: false,
    isDataPair: true,
    name: 'Change params in short links and shorten',
    data: [],
    id: '24',
    color: '#c96',
    description: 'rule description',
  },
  id25: {
    disabled: true,
    hasData: false,
    hasDataOption: false,
    hasOption: false,
    hasParam: false,
    hasCheckList: false,
    isDataPair: false,
    name: 'Expand link',
    id: '25',
    color: '#c96',
    description: 'rule description',
  },
  id26: {
    disabled: true,
    hasData: false,
    hasDataOption: false,
    hasOption: false,
    hasParam: true,
    hasCheckList: false,
    isDataPair: false,
    name: 'Shorten link',
    id: '26',
    color: '#c96',
    description: 'rule description',
  },
  id27: {
    disabled: true,
    hasData: true,
    hasDataOption: true,
    hasOption: false,
    hasParam: true,
    hasCheckList: false,
    isDataPair: true,
    name: 'Change params then shorten',
    data: [],
    id: '27',
    color: '#c96',
    description: 'rule description',
  },
  id28: {
    disabled: true,
    hasData: true,
    hasDataOption: true,
    hasOption: false,
    hasParam: true,
    hasCheckList: false,
    isDataPair: true,
    name: 'Ronokovalley',
    data: [],
    id: '28',
    color: '#c96',
    description: 'rule description',
  },
  id29: {
    disabled: true,
    hasData: true,
    hasDataOption: false,
    hasOption: false,
    hasParam: false,
    hasCheckList: false,
    isDataPair: false,
    name: 'Ban url in expanedd link',
    data: [],
    id: '29',
    color: '#c96',
    description: 'rule description',
  },
  id210: {
    disabled: true,
    hasData: true,
    hasDataOption: false,
    hasOption: false,
    hasParam: false,
    hasCheckList: false,
    isDataPair: false,
    name: 'Link in expanded url white list',
    data: [],
    id: '210',
    color: '#c96',
    description: 'rule description',
  },
  id211: {
    disabled: true,
    hasData: true,
    hasDataOption: false,
    hasOption: false,
    hasParam: false,
    hasCheckList: false,
    isDataPair: false,
    name: 'Ban Post with specific link',
    data: [],
    id: '211',
    color: '#c96',
    description: 'rule description',
  },
  id212: {
    disabled: true,
    hasData: true,
    hasDataOption: false,
    hasOption: false,
    hasParam: false,
    hasCheckList: false,
    isDataPair: false,
    name: 'Remove specific link from post',
    data: [],
    id: '212',
    color: '#c96',
    description: 'rule description',
  },
  id31: {
    hasData: false,
    hasDataOption: false,
    hasOption: false,
    hasParam: false,
    hasCheckList: false,
    isDataPair: false,
    name: 'Ban all Medias',
    id: '31',
    color: '#69c',
    description: 'messages containing media wont be sent',
  },
  id32: {
    hasData: true,
    hasDataOption: false,
    hasOption: false,
    hasParam: false,
    hasCheckList: true,
    isDataPair: false,
    name: 'Media white list',
    data: [],
    id: '32',
    color: '#69c',
    description: 'rule description',
  },
  id33: {
    hasData: true,
    hasDataOption: false,
    hasOption: false,
    hasParam: false,
    hasCheckList: true,
    isDataPair: false,
    name: 'Media black list',
    data: [],
    id: '33',
    color: '#69c',
    description: 'rule description',
  },
  id34: {
    hasData: true,
    hasDataOption: false,
    hasOption: false,
    hasParam: false,
    hasCheckList: true,
    isDataPair: false,
    name: 'Skip Media',
    data: [],
    id: '34',
    color: '#69c',
    description: 'rule description',
  },
  id35: {
    hasData: false,
    hasDataOption: false,
    hasOption: false,
    hasParam: false,
    hasCheckList: false,
    isDataPair: false,
    name: 'remove media preview',
    id: '35',
    color: '#69c',
    description: 'rule description',
  },
};

const namesArray = [
  [
    'words white list',
    'words black list',
    'replace words',
    'add before message',
    'add after message',
    'clear all formatting',
    'clear emojies',
  ],
  [
    'ban posts containing links',
    'remove links from posts',
    'rule 2 option 3',
    'rule 2 option 4',
    'rule 2 option 4',
    'rule 2 option 5',
    'rule 2 option 7',
    'rule 2 option 8',
    'rule 2 option 9',
    'rule 2 option 10',
    'rule 2 option 11',
    'rule 2 option 12',
  ],
  [
    'ban all media',
    'media white list',
    'media black list',
    'remove media from message',
    'remove media preview',
  ],
];

export default namesArray;