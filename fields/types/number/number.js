var React = require('react'),
	Field = require('../field');

module.exports = Field.create({
	
	supports: {
		width: true
	},
	
	valueChanged: function(event) {
		var newValue = event.target.value.replace(/[^\d]/g, '');
		if (newValue === this.props.value) return;
		this.props.onChange({
			path: this.props.path,
			value: newValue
		});
	},
	
	renderField: function() {
		return <input type="text" name={this.props.path} ref="focusTarget" value={this.props.value} onChange={this.valueChanged} autoComplete="off" className="form-control" />;
	}
	
});
