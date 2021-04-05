'use strict';

const employers = ['АртеМ', 'максим', 'Владимир', 'сергей', 'НикиТа', 'евГений', ' Дарья', ' ', 'виктория ',
	'ЕкаТерина', '', ' Андрей ', 'КИРИЛЛ'];
const nameCourse = 'Базовый React';
const command = [];
const data = {
	cash: [3, 8, 3],
	react: ['JSX', 'components', 'props', 'state', 'hooks'],
	add: ['styled-components', 'firebase']
};

employers.forEach(item => {
	if (item.length > 0 && item.trim() !== '') {
		command.push(item);
	}
});

for (let i = 0; i < command.length; i++) {
	command[i] = command[i].toLowerCase().trim();
	command[i] = command[i][0].toUpperCase() + command[i].slice(1);
}

const calcCash = (own = 0, ...arg) => {
	const everyCash = arg;
	let total = own;
	everyCash.forEach(item => {
		total += +item;
	});
	return total;
};

const lesson = calcCash(null, data.cash);

const makeBusiness = (director, allModule, gang, course, teacher = 'Максим') => {
	const sumTech = data.react.concat(data.add, 'и другие');
	console.log(`Стартуем новый курс: "${course}". Владелец: ${director}, преподаватель: ${teacher}. Всего уроков: ${allModule}.
Команда Академии: ${gang}`);
	console.log(`Первое что изучим будет ${data.react[0]}. Он очень похож на HTML!`);
	console.log('Технологии которые мы изучим: ');
	console.log(...sumTech);
};

makeBusiness(...['Артем', lesson, command, nameCourse]);
