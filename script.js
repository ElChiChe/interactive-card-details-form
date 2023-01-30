//CARD DATA IMAGE => SPAN
const front_card_name = document.querySelector(".card-name");
const front_card_numbers = document.querySelector(".card-numbers");
const front_card_expiration = document.querySelector(".card-expiration");
const front_card_month = document.querySelector(".card-month");
const front_card_year = document.querySelector(".card-year");

const card_back_cvc_span = document.querySelector(".card-cvc-image");

const banner = document.querySelector(".banner");

//DATA CARD FORM PARENT
const data_card_form = document.querySelector(".data-card-form");


//COMPLETED MESSAGE
const form_completed = document.querySelector(".form-completed");
const btn_completed = document.querySelector(".btn-completed");


//ERROR MESSAGE
const error_form_name = document.querySelector(".error-form-name");
const error_form_numcard = document.querySelector(".error-form-numcard");

const error_form_expiration = document.querySelector(".error-form-expiration");
const error_form_cvc = document.querySelector(".error-form-cvc");


//BUTTON CONFIRM
const btn_confirm = document.querySelector(".btn-confirm");

//FORM CARD DATA
const form_name_input = document.querySelector(".form-name-input");
const form_numcard_input = document.querySelector(".form-numbercard-input");
const form_mm_input = document.querySelector(".form-mm-input");
const form_yy_input = document.querySelector(".form-yy-input");
const form_cvc_input = document.querySelector(".form-cvc-input");


const setCardName = e => {
	front_card_name.textContent = e.target.value;
}

const setCardNumbers = e => {
	front_card_numbers.textContent = format(e.target.value);
}

const setCardMonth = e => {
	front_card_month.textContent = e.target.value;
}

const setCardYear = e => {
	front_card_year.textContent = e.target.value;
}

const setCardBackCvc = e => {
	card_back_cvc_span.textContent = e.target.value;
}

const confirmData = () => {
	if(!form_name_input.value) {
		error_form_name.style.display = "block";		
	}
	else {
		error_form_name.style.display = "none";
	}

	if(!form_numcard_input.value) {
		error_form_numcard.style.display = "block";		
	}
	else {
		error_form_numcard.style.display = "none";
	}

	if(!form_mm_input.value) {
		error_form_expiration.style.display = "block";		
	}
	else {
		error_form_expiration.style.display = "none";
	}

	if(!form_yy_input.value) {
		error_form_expiration.style.display = "block";		
	}
	else {
		error_form_expiration.style.display = "none";
	}


	if(!form_cvc_input.value) {
		error_form_cvc.style.display = "block";		
	}
	else {
		error_form_cvc.style.display = "none";
	}

	if(form_name_input.value && form_numcard_input.value &&
	form_mm_input.value && form_yy_input.value && form_cvc_input.value) {
		data_card_form.style.display = "none";
		form_completed.style.display = "flex";
		banner.classList.add("resize-banner");
	}

}

const format = s => {
	return ( 
		s.replace(/\D/g, "")
		.replace(/(\d{4})/g, "$1 ")
		.trim()
	)
}

const resetForm = () => {
	window.location.reload();
}


form_name_input.addEventListener("input", setCardName);
form_numcard_input.addEventListener("input", setCardNumbers);
form_mm_input.addEventListener("input", setCardMonth);
form_yy_input.addEventListener("input", setCardYear);
form_cvc_input.addEventListener("input", setCardBackCvc);

btn_confirm.addEventListener("click", confirmData);
btn_completed.addEventListener("click", resetForm);