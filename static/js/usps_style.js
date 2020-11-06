function getNewUspTypeofvisitUpdate(){
	document.getElementById('id_comment').required = '';

	if (document.getElementById('visit_type').options[document.getElementById('visit_type').selectedIndex].value == '1') {
		document.getElementById('id_sex_0').required = 'required';
		document.getElementById('id_sex_1').required = 'required';
		document.getElementById('id_sex_2').required = 'required';

		document.getElementById('id_ac_nc_1').required = 'required';
		document.getElementById('id_ac_nc_0').required = 'required';
		document.getElementById('id_ac_nc_2').required = 'required';

		document.getElementById('pregnant_or_postpartum').required = '';
		document.getElementById('pregnant_or_postpartum').checked = '';

		document.getElementById('syndromes_infectieux').checked = '';
		document.getElementById('syndromes_infectieux').required = '';
		
		document.getElementById('ist').checked = '';
		document.getElementById('ist').required = '';

		document.getElementById('id_reference_0').required = 'required';
		document.getElementById('id_reference_1').required = 'required';
		document.getElementById('id_reference_2').required = 'required';

		document.getElementById('label_care_or_follow_up').style.display = 'none';
		document.getElementById('id_care_or_follow_up_0').checked = 'checked';
		document.getElementById('id_care_or_follow_up_1').checked = '';
		document.getElementById('id_care_or_follow_up_2').checked = '';
		document.getElementById('id_care_or_follow_up_0').required = 'required';
		document.getElementById('id_care_or_follow_up_1').required = 'required';
		document.getElementById('id_care_or_follow_up_2').required = 'required';

		document.getElementById('id_promptness').required = 'required';

	} else if (document.getElementById('visit_type').options[document.getElementById('visit_type').selectedIndex].value == '2') {

		document.getElementById('id_sex_1').checked = 'checked';
		document.getElementById('id_sex_1').required = 'required';

		document.getElementById('id_ac_nc_1').required = 'required';
		document.getElementById('id_ac_nc_0').required = 'required';
		document.getElementById('id_ac_nc_2').required = 'required';

		document.getElementById('pregnant_or_postpartum').required = '';
		document.getElementById('syndromes_infectieux').required = '';
		document.getElementById('ist').required = '';

		document.getElementById('id_reference_0').required = 'required';
		document.getElementById('id_reference_1').required = 'required';
		document.getElementById('id_reference_2').required = 'required';

		document.getElementById('label_care_or_follow_up').style.display = 'none';
		document.getElementById('id_care_or_follow_up_0').checked = 'checked';
		document.getElementById('id_care_or_follow_up_1').checked = '';
		document.getElementById('id_care_or_follow_up_2').checked = '';
		document.getElementById('id_care_or_follow_up_0').required = 'required';
		document.getElementById('id_care_or_follow_up_1').required = 'required';
		document.getElementById('id_care_or_follow_up_2').required = 'required';

		document.getElementById('label_promptness').style.display = 'block';
		document.getElementById('id_promptness').required = 'required';

	}
};

function getNewUspTypeofvisit() {
	document.getElementById('id_comment').required = '';

	if (document.getElementById('visit_type').options[document.getElementById('visit_type').selectedIndex].value == '1') {
		document.getElementById('label_sex').style.display = 'block';
		document.getElementById('id_sex_0').checked = '';
		document.getElementById('id_sex_1').checked = '';
		document.getElementById('id_sex_2').checked = '';
		document.getElementById('id_sex_0').required = 'required';
		document.getElementById('id_sex_1').required = 'required';
		document.getElementById('id_sex_2').required = 'required';

		document.getElementById('label_ac_nc').style.display = 'block';
		document.getElementById('id_ac_nc_1').checked = '';
		document.getElementById('id_ac_nc_0').checked = '';
		document.getElementById('id_ac_nc_2').checked = '';
		document.getElementById('id_ac_nc_1').required = 'required';
		document.getElementById('id_ac_nc_0').required = 'required';
		document.getElementById('id_ac_nc_2').required = 'required';

		document.getElementById('age').style.display = 'block';
		document.getElementById('age_year').value = '';
		document.getElementById('age_month').value = '';
		document.getElementById('age_semaine').value = '';
		document.getElementById('age_jour').value = '';

		document.getElementById('all_motif_consultation').style.display = 'block';
		document.getElementById('id_diarrhee').checked = '';
		document.getElementById('id_malnutrition').checked = '';
		document.getElementById('id_paludisme').checked = '';
		document.getElementById('id_pneumonie').checked = '';
		document.getElementById('id_fievre_simple').checked = '';
		document.getElementById('id_toux_ou_rhume').checked = '';
		document.getElementById('id_signe_de_danger').checked = '';
		document.getElementById('id_autre_motif').checked = '';
		document.getElementById('id_motif_nr').checked = '';

		document.getElementById('label_pregnant_or_postpartum').style.display = 'none';
		document.getElementById('pregnant_or_postpartum').value = '';
		document.getElementById('pregnant_or_postpartum').required = '';

		document.getElementById('label_syndromes_infectieux').style.display = 'none';
		document.getElementById('syndromes_infectieux').checked = '';
		document.getElementById('syndromes_infectieux').required = '';

		document.getElementById('label_ist').style.display = 'none';
		document.getElementById('ist').checked = '';
		document.getElementById('ist').required = '';

		document.getElementById('les_autres_motifs').style.display = 'none';

		document.getElementById('label_reference').style.display = 'block';
		document.getElementById('id_reference_0').checked = '';
		document.getElementById('id_reference_1').checked = '';
		document.getElementById('id_reference_2').checked = '';
		document.getElementById('id_reference_0').required = 'required';
		document.getElementById('id_reference_1').required = 'required';
		document.getElementById('id_reference_2').required = 'required';

		document.getElementById('label_care_or_follow_up').style.display = 'none';
		document.getElementById('id_care_or_follow_up_0').checked = 'checked';
		document.getElementById('id_care_or_follow_up_1').checked = '';
		document.getElementById('id_care_or_follow_up_2').checked = '';
		document.getElementById('id_care_or_follow_up_0').required = 'required';
		document.getElementById('id_care_or_follow_up_1').required = 'required';
		document.getElementById('id_care_or_follow_up_2').required = 'required';

		document.getElementById('label_promptness').style.display = 'block';
		document.getElementById('id_promptness').value = ''
		document.getElementById('id_promptness').required = 'required';

	} else if (document.getElementById('visit_type').options[document.getElementById('visit_type').selectedIndex].value == '2') {

		document.getElementById('label_sex').style.display = 'none';
		document.getElementById('id_sex_0').checked = '';
		document.getElementById('id_sex_1').checked = 'checked';
		document.getElementById('id_sex_2').checked = '';
		document.getElementById('id_sex_0').required = '';
		document.getElementById('id_sex_1').required = 'required';
		document.getElementById('id_sex_2').required = '';

		document.getElementById('label_ac_nc').style.display = 'block';
		document.getElementById('id_ac_nc_1').checked = '';
		document.getElementById('id_ac_nc_0').checked = '';
		document.getElementById('id_ac_nc_2').checked = '';
		document.getElementById('id_ac_nc_1').required = 'required';
		document.getElementById('id_ac_nc_0').required = 'required';
		document.getElementById('id_ac_nc_2').required = 'required';

		document.getElementById('age').style.display = 'block';
		document.getElementById('age_year').value = '';
		document.getElementById('age_month').value = '';
		document.getElementById('age_semaine').value = '';
		document.getElementById('age_jour').value = '';

		document.getElementById('all_motif_consultation').style.display = 'block';
		document.getElementById('id_diarrhee').checked = '';
		document.getElementById('id_malnutrition').checked = '';
		document.getElementById('id_paludisme').checked = '';
		document.getElementById('id_pneumonie').checked = '';
		document.getElementById('id_fievre_simple').checked = '';
		document.getElementById('id_toux_ou_rhume').checked = '';
		document.getElementById('id_signe_de_danger').checked = '';
		document.getElementById('id_autre_motif').checked = '';
		document.getElementById('id_motif_nr').checked = '';

		document.getElementById('les_autres_motifs').style.display = 'block';

		document.getElementById('label_pregnant_or_postpartum').style.display = 'block';
		document.getElementById('pregnant_or_postpartum').value = '';
		document.getElementById('pregnant_or_postpartum').required = '';

		document.getElementById('label_syndromes_infectieux').style.display = 'block';
		document.getElementById('syndromes_infectieux').checked = '';
		document.getElementById('syndromes_infectieux').required = '';

		document.getElementById('label_ist').style.display = 'block';
		document.getElementById('ist').checked = '';
		document.getElementById('ist').required = '';

		document.getElementById('label_reference').style.display = 'block';
		document.getElementById('id_reference_0').checked = '';
		document.getElementById('id_reference_1').checked = '';
		document.getElementById('id_reference_2').checked = '';
		document.getElementById('id_reference_0').required = 'required';
		document.getElementById('id_reference_1').required = 'required';
		document.getElementById('id_reference_2').required = 'required';

		document.getElementById('label_care_or_follow_up').style.display = 'none';
		document.getElementById('id_care_or_follow_up_0').checked = 'checked';
		document.getElementById('id_care_or_follow_up_1').checked = '';
		document.getElementById('id_care_or_follow_up_2').checked = '';
		document.getElementById('id_care_or_follow_up_0').required = 'required';
		document.getElementById('id_care_or_follow_up_1').required = 'required';
		document.getElementById('id_care_or_follow_up_2').required = 'required';

		document.getElementById('label_promptness').style.display = 'block';
		document.getElementById('id_promptness').value = ''
		document.getElementById('id_promptness').required = 'required';

	} else {
		document.getElementById('label_sex').style.display = 'none';
		document.getElementById('id_sex_0').checked = '';
		document.getElementById('id_sex_1').checked = '';
		document.getElementById('id_sex_2').checked = '';
		document.getElementById('id_sex_0').required = '';
		document.getElementById('id_sex_1').required = '';
		document.getElementById('id_sex_2').required = '';

		document.getElementById('label_ac_nc').style.display = 'none';
		document.getElementById('id_ac_nc_1').checked = '';
		document.getElementById('id_ac_nc_0').checked = '';
		document.getElementById('id_ac_nc_2').checked = '';
		document.getElementById('id_ac_nc_1').required = '';
		document.getElementById('id_ac_nc_0').required = '';
		document.getElementById('id_ac_nc_2').required = '';

		document.getElementById('age').style.display = 'none';
		document.getElementById('age_year').value = '';
		document.getElementById('age_month').value = '';
		document.getElementById('age_semaine').value = '';
		document.getElementById('age_jour').value = '';

		document.getElementById('all_motif_consultation').style.display = 'none';
		document.getElementById('id_diarrhee').checked = '';
		document.getElementById('id_malnutrition').checked = '';
		document.getElementById('id_paludisme').checked = '';
		document.getElementById('id_pneumonie').checked = '';
		document.getElementById('id_fievre_simple').checked = '';
		document.getElementById('id_toux_ou_rhume').checked = '';
		document.getElementById('id_signe_de_danger').checked = '';
		document.getElementById('id_autre_motif').checked = '';
		document.getElementById('id_motif_nr').checked = '';

		document.getElementById('les_autres_motifs').style.display = 'none';

		document.getElementById('label_pregnant_or_postpartum').style.display = 'none';
		document.getElementById('pregnant_or_postpartum').value = '';
		document.getElementById('pregnant_or_postpartum').required = '';

		document.getElementById('label_syndromes_infectieux').style.display = 'none';
		document.getElementById('syndromes_infectieux').checked = '';
		document.getElementById('syndromes_infectieux').required = '';

		document.getElementById('label_ist').style.display = 'none';
		document.getElementById('ist').checked = '';
		document.getElementById('ist').required = '';

		document.getElementById('label_reference').style.display = 'none';
		document.getElementById('id_reference_0').checked = '';
		document.getElementById('id_reference_1').checked = '';
		document.getElementById('id_reference_2').checked = '';
		document.getElementById('id_reference_0').required = '';
		document.getElementById('id_reference_1').required = '';
		document.getElementById('id_reference_2').required = '';

		document.getElementById('label_care_or_follow_up').style.display = 'none';
		document.getElementById('id_care_or_follow_up_0').checked = '';
		document.getElementById('id_care_or_follow_up_1').checked = '';
		document.getElementById('id_care_or_follow_up_2').checked = '';
		document.getElementById('id_care_or_follow_up_0').required = '';
		document.getElementById('id_care_or_follow_up_1').required = '';
		document.getElementById('id_care_or_follow_up_2').required = '';

		document.getElementById('label_promptness').style.display = 'none';
		document.getElementById('id_promptness').value = ''
		document.getElementById('id_promptness').required = '';

	}
};

function getUspEnceinteOuPostpartum() {
	document.getElementById('id_comment').required = '';

	if (document.getElementById('pregnant_or_postpartum').options[document.getElementById('pregnant_or_postpartum').selectedIndex].value == '2') {
		document.getElementById('label_ist').style.display = 'block';
		document.getElementById('ist').checked = '';
		document.getElementById('ist').required = '';
	}else {
		document.getElementById('label_ist').style.display = 'none';
		document.getElementById('ist').checked = '';
		document.getElementById('ist').required = '';
	}
}

function getNewUspSoinsOuSuivi() {
	document.getElementById('id_comment').required = '';

	if (document.getElementById('id_care_or_follow_up_1').checked) {
		document.getElementById('label_promptness').style.display = 'none';
		document.getElementById('id_promptness').value = '5';
		document.getElementById('id_promptness').required = 'required';
	}
	else {
		document.getElementById('label_promptness').style.display = 'block';
		document.getElementById('id_promptness').value = '';
		document.getElementById('id_promptness').required = 'required';
	}

}
