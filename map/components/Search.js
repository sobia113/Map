const Search = ({ onSearch }) => {
	const [value, setValue] = useState('');
  
	const handleChange = (event) => {
	  setValue(event.target.value);
	};
  
	const handleSubmit = (event) => {
	  event.preventDefault();
	  onSearch(value);
	};
  
	return (
	  <form id="geocoding_form" className="form-horizontal" onSubmit={handleSubmit}>
		<div className="form-group">
		  <div className="col-xs-12 col-md-6 col-md-offset-3">
			<div className="input-group">
			  <input
				type="text"
				className="form-control"
				id="address"
				placeholder="Find a location..."
				value={value}
				onChange={handleChange}
			  />
			  <span className="input-group-btn">
				<span className="glyphicon glyphicon-search" aria-hidden="true"></span>
			  </span>
			</div>
		  </div>
		</div>
	  </form>
	);
  };
  
  export default Search;