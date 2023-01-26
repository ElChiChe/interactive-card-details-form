//CARD DATA IMAGE => SPAN
const front_card_name = document.querySelector(".card-name");
const front_card_numbers = document.querySelector(".card-numbers");
const front_card_expiration = document.querySelector(".card-expiration");

const card_back_cvc_span = document.querySelector(".card-cvc-image");


//BUTTON CONFIRM
const btn_confirm = document.querySelector(".btn-confirm");

//FORM CARD DATA
const form_name_input = document.querySelector(".form-name-input");
const form_numcard_input = document.querySelector(".form-numbercard-input");
const form_mm_input = document.querySelector(".form-mm-input");
const form_yy_input = document.querySelector(".form-yy-input");
const form_cvc_input = document.querySelector(".form-cvc-input");

const getDataFromInputs = (name, numcard, mm, yy, cvc) => {
	let name_input = name.value;
	let numcard_input = numcard.value;
	let mm_input = mm.value;
	let yy_input = yy.value;
	let cvc_input = cvc.value;

	form_name_input.value = "";
	form_numcard_input.value = "";
	form_mm_input.value = "";
	form_yy_input.value = "";
	form_cvc_input.value = "";

	printDataCard(name_input, numcard_input, mm_input, yy_input, cvc_input);
}

const printDataCard = (name, numcard, mm, yy, cvc) => {
	front_card_name.textContent = name;
	front_card_numbers.textContent = numcard;
	front_card_expiration.textContent = `${mm}/${yy}`;
	card_back_cvc_span.textContent = cvc;


}


//AGREGAR CONDICIONALES PARA VERIFICAR LOS CAMPOS DE LOS INPUTS, COLOCAR EL
//FORMATO CORRECTAMENTE PARA QUE NO SE PUEDA COLAPSAR EL DISEÑO NI LOS DATOS
//INGRESADOSPOR EXCESO DE INFORMACIÓN.

btn_confirm.addEventListener("click", () => {
	getDataFromInputs(form_name_input, form_numcard_input, form_mm_input, form_yy_input, form_cvc_input)
})