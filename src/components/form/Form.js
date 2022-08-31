import './form.css';
import Selectform from './Selectform';
import Searchform from './Searchform';

const Form = () => {

    return (
	<section className='container-fluid my-3'>
	    <form className='d-flex flex-column-reverse align-items-start flex-md-row justify-content-md-between'>
		<Selectform/>
		<Searchform/>
	    </form>
	</section>
    )
}

export default Form;
