module.exports = function(sequelize, DataTypes) {
	var Todo = sequelize.define('Todo', {
		text: DataTypes.STRING,
		details: DataTypes.STRING
	}
	);
	

	return Todo;
};
