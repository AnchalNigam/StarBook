// const { format } = require('date-fns');


// module.exports = {
//   Date: {
//     name: 'Date',
//     parseValue(value) {
//       if (value && !Number.isNaN(value)) {
//         return format(value, 'YYYY-MM-DD');
//       }

//       return format(0, 'YYYY-MM-DD');
//     },
//     parseLiteral(ast) {
//       return ast.value;
//     },
//     serialize(value) {
//       console.log(value, 'value')
//       if (value && !Number.isNaN(value)) {
//         return format(value, 'YYYY-MM-DD');
//       }

//       return format(0, 'YYYY-MM-DD');
//     },
//   },
// };
const { format } = require('date-fns');

module.exports = {
	Date: {
		parseValue(value) {
			return value;
		},
		parseLiteral(ast) {
			return ast.value;
		},
		serialize(value) {
      console.log(value, 'jaodoahdiahdigdudgihdihdakhbdjavjvurgfurgfuergfe')
			return format(value, 'yyyy-MM-dd');
		},
	},
};
