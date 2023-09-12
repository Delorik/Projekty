jQuery(document).ready(function($) {
    $('[data-create-rows]').on('click', function() {
        let value = $('[data-num-of-rows]').val();
        if (!value || value < 1 || !(Math.floor(value) == value && $.isNumeric(value))) {
            alert('Zvol pouze číselnou hodnotu vyšší než 1!');
            return;
        }
        else {
            let numOfRows = $('[data-num-of-rows]').val();
            let cont = $('.rows');
            console.log(cont);
            for (i = 1; i <= numOfRows; i++) {
                let x = $('<div class="row" data-row><h3 class="block">Řádek číslo '+i+'</h3><form class="colors"><p>Barva řádku:</p><input class="green" type="radio" id="green" name="color'+i+'" value="green"><label for="green">Zelená</label><input class="yellow" type="radio" id="yellow" name="color'+i+'" value="yellow"><label for="yellow">Žlutá</label><input class="red" type="radio" id="red" name="color'+i+'" value="red"><label for="red">Červená</label><input class="blue" type="radio" id="blue" name="color'+i+'" value="blue"><label for="blue">Modrá</label></form><p>Text řádku:</p><input class="text" data-row-text type="text"><p>Odkaz řádku:</p><input class="text" data-row-link type="text"></div>');
                cont.append(x);
            }
            $('<div data-generate-button class="button">Vygenerovat kód</div>').appendTo(cont);
            $(this).remove();


            $('[data-generate-button]').on('click', function() {
                let = firstTextRow = $('[data-first-row]').val();
                let = secondTextRow = $('[data-second-row]').val();
                if (!$('[data-row-text]').val() || !$('[data-row-link]').val()) {
                    alert('Některý z řádků nemá vyplněný text/odkaz!');
                    return;
                }
                function hasUnselectedRadioGroup() {
                    var groups = {};

                    $('input[type="radio"]').each(function() {
                    var groupName = $(this).attr('name');
                
                    if (groupName) {
                        if (!groups[groupName]) {
                        groups[groupName] = [];
                        }

                        groups[groupName].push(this);
                    }
                    });

                    for (var groupName in groups) {
                    if (!$(groups[groupName]).is(':checked')) {
                        return true;
                    }
                    }
                
                    return false;
                }
                if (hasUnselectedRadioGroup()) {
                    alert('Některý z řádků nemá zvolenou barvu!');
                    return;
                }
                let rows = $('<tbody></tbody>');

                $('[data-row]').each(function(e) {
                    let color = $(this).find('input[type="radio"]:checked').val();
                    let text = $(this).find('[data-row-text]').val();
                    let link = $(this).find('[data-row-link]').val();
                    let row = $('<tr>'
                    +'<td style="padding: 10px 5px 10px 0; margin: 0; width: 40px; border-bottom: 1px solid #D6D6D6;"><img src="https://www.zakonyzavcas.cz//img/mail_v2/semaphore_'+color+'_30.png" alt=""></td>'
                    +'<td style="padding: 0; margin: 0; width: 90px; border-bottom: 1px solid #D6D6D6;"><a style="-webkit-text-size-adjust: none; -ms-text-size-adjust: none; mso-line-height-rule: exactly; text-decoration: underline; color: #2cb543; font-size: 13px;" href="https://www.zakonyzavcas.cz/poptavka"><img style="display: inline-block; border: 0; outline: none; text-decoration: none; -ms-interpolation-mode: bicubic; margin-right: 5px; width: 20px;" src="https://www.zakonyzavcas.cz//img/mail_v2/download.png" alt="" align="left"></a> <a style="-webkit-text-size-adjust: none; -ms-text-size-adjust: none; mso-line-height-rule: exactly; text-decoration: underline; color: #2cb543; font-size: 13px;" href="https://www.zakonyzavcas.cz/poptavka"><img style="display: inline-block; border: 0; outline: none; text-decoration: none; -ms-interpolation-mode: bicubic; margin-right: 5px; width: 20px;" src="https://www.zakonyzavcas.cz//img/mail_v2/play.png" alt="" align="left"></a></td>'
                    +'<td style="padding: 0; margin: 0; border-bottom: 1px solid #D6D6D6;"><a style="-webkit-text-size-adjust: none; -ms-text-size-adjust: none; mso-line-height-rule: exactly; text-decoration: underline; color: #000000; font-size: 18px; font-weight: bold;" href="'+link+'" target="_blank">'+text+'</a></td>'
                    +'</tr>'
                    );
                    rows.append(row);
                });

                const templateHTML = $('<div class="es-wrapper-color" style="background-color: #f6f6f6;">'
                +'<table class="es-wrapper" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-collapse: collapse; border-spacing: 0px; padding: 0; margin: 0; width: 100%; height: 100%; background-repeat: repeat; background-position: center top;" width="100%" cellspacing="0" cellpadding="0">'
                +'<tbody>'
                +'<tr>'
                +'<td style="padding: 0; margin: 0;" valign="top">'
                +'<table class="es-header" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-collapse: collapse; border-spacing: 0px; table-layout: fixed !important; width: 100%; background-color: transparent; background-repeat: repeat; background-position: center top;" cellspacing="0" cellpadding="0" align="center">'
                +'<tbody>'
                +'<tr>'
                +'<td style="padding: 0; margin: 0;" align="center">'
                +'<table class="es-header-body" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-collapse: collapse; border-spacing: 0px; background-color: #ffffff; width: 600px;" cellspacing="0" cellpadding="0" align="center" bgcolor="#ffffff">'
                +'<tbody>'
                +'<tr>'
                +'<td style="padding: 0; margin: 0; padding-top: 20px; padding-right: 20px;" align="left">'
                +'<table class="es-left" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-collapse: collapse; border-spacing: 0px; float: left;" cellspacing="0" cellpadding="0" align="left">'
                +'<tbody>'
                +'<tr>'
                +'<td class="es-m-p0r es-m-p20b" style="padding: 0; margin: 0; width: 192px;" align="center" valign="top">'
                +'<table style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-collapse: collapse; border-spacing: 0px;" width="100%" cellspacing="0" cellpadding="0">'
                +'<tbody>'
                +'<tr>'
                +'<td style="padding: 0; margin: 0; font-size: 0px;" align="center"><img class="adapt-img" style="display: block; border: 0; outline: none; text-decoration: none; -ms-interpolation-mode: bicubic;" src="https://www.zakonyzavcas.cz//img/mail_v2/logo_zk.png" alt="" width="192"></td>'
                +'</tr>'
                +'</tbody>'
                +'</table>'
                +'</td>'
                +'</tr>'
                +'</tbody>'
                +'</table>'
                +'<table style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-collapse: collapse; border-spacing: 0px;" cellspacing="0" cellpadding="0" align="right">'
                +'<tbody>'
                +'<tr>'
                +'<td style="padding: 0; margin: 0; width: 368px;" align="left">'
                +'<table style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-collapse: collapse; border-spacing: 0px;" width="100%" cellspacing="0" cellpadding="0">'
                +'<tbody>'
                +'<tr>'
                +'<td style="padding: 0; margin: 0; padding-left: 20px;" align="left">'
                +'<p style="margin: 0; -webkit-text-size-adjust: none; -ms-text-size-adjust: none; mso-line-height-rule: exactly; font-family: sans-serif; line-height: 27px; color: #333333; font-size: 18px;"><strong>'+firstTextRow+'</strong></p>'
                +'</td>'
                +'</tr>'
                +'<tr>'
                +'<td style="padding: 0; margin: 0; padding-left: 20px;" align="left">'
                +'<p style="margin: 0; -webkit-text-size-adjust: none; -ms-text-size-adjust: none; mso-line-height-rule: exactly; font-family: sans-serif; line-height: 24px; color: #333333; font-size: 16px;"><strong>'+secondTextRow+'</strong></p>'
                +'</td>'
                +'</tr>'
                +'</tbody>'
                +'</table>'
                +'</td>'
                +'</tr>'
                +'</tbody>'
                +'</table></td>'
                +'</tr>'
                +'</tbody>'
                +'</table>'
                +'</td>'
                +'</tr>'
                +'</tbody>'
                +'</table>'
                +'<table class="es-content" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-collapse: collapse; border-spacing: 0px; table-layout: fixed !important; width: 100%;" cellspacing="0" cellpadding="0" align="center">'
                +'<tbody>'
                +'<tr>'
                +'<td style="padding: 0; margin: 0;" align="center">'
                +'<table class="es-content-body" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-collapse: collapse; border-spacing: 0px; background-color: #ffffff; width: 600px;" cellspacing="0" cellpadding="0" align="center" bgcolor="#ffffff">'
                +'<tbody>'
                +'<tr>'
                +'<td style="padding: 0; margin: 0; padding-top: 20px; padding-left: 20px; padding-right: 20px;">{email}</td>'
                +'</tr>'
                +'<tr>'
                +'<td style="padding: 0; margin: 0; padding-top: 20px; padding-left: 20px; padding-right: 20px;" align="left">'
                +'<table style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-collapse: collapse; border-spacing: 0px;" width="100%" cellspacing="0" cellpadding="0">'
                +'<tbody>'
                +'<tr>'
                +'<td style="padding: 0; margin: 0; width: 560px;" align="center" valign="top">'
                +'<table style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-collapse: collapse; border-spacing: 0px;" width="100%" cellspacing="0" cellpadding="0">'
                +'<tbody>'
                +'<tr>'
                +'<td style="padding: 0; margin: 0;" align="left">'
                +'<table class="es-table cke_show_border" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-collapse: collapse; border-spacing: 0px; width: 100%; font-size: 20px; font-weight: bold;" border="0" cellspacing="0" cellpadding="10">'
                +rows.html()
                +'</table>'
                +'</td>'
                +'</tr>'
                +'</tbody>'
                +'</table>'
                +'</td>'
                +'</tr>'
                +'</tbody>'
                +'</table>'
                +'</td>'
                +'</tr>'
                +'<tr>'
                +'<td style="padding: 0; margin: 0; padding-top: 20px; padding-left: 20px; padding-right: 20px;" align="left">'
                +'<table class="es-left" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-collapse: collapse; border-spacing: 0px; float: left;" cellspacing="0" cellpadding="0" align="left">'
                +'<tbody>'
                +'<tr>'
                +'<td class="es-m-p0r es-m-p20b" style="padding: 0; margin: 0; width: 125px;" align="center">'
                +'<table style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-collapse: collapse; border-spacing: 0px;" width="100%" cellspacing="0" cellpadding="0">'
                +'<tbody>'
                +'<tr>'
                +'<td style="padding: 0; margin: 0; white-space: nowrap; vertical-align: middle;" align="left">'
                +'<p style="margin: 0; -webkit-text-size-adjust: none; -ms-text-size-adjust: none; mso-line-height-rule: exactly; font-family: sans-serif; line-height: 18px; color: #333333; font-size: 12px;"><img style="vertical-align: -5px;" src="https://www.zakonyzavcas.cz//img/mail_v2/semaphore_green_20.png" alt="v&scaron;echno v poř&aacute;dku"> v&scaron;echno v poř&aacute;dku</p>'
                +'</td>'
                +'</tr>'
                +'</tbody>'
                +'</table>'
                +'</td>'
                +'<td class="es-hidden" style="padding: 0; margin: 0; width: 20px;">&nbsp;</td>'
                +'</tr>'
                +'</tbody>'
                +'</table>'
                +'<table class="es-left" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-collapse: collapse; border-spacing: 0px; float: left;" cellspacing="0" cellpadding="0" align="left">'
                +'<tbody>'
                +'<tr>'
                +'<td class="es-m-p20b" style="padding: 0; margin: 0; width: 125px;" align="center">'
                +'<table style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-collapse: collapse; border-spacing: 0px;" width="100%" cellspacing="0" cellpadding="0">'
                +'<tbody>'
                +'<tr>'
                +'<td style="padding: 0; margin: 0;" align="left">'
                +'<p style="margin: 0; -webkit-text-size-adjust: none; -ms-text-size-adjust: none; mso-line-height-rule: exactly; font-family: sans-serif; line-height: 18px; color: #333333; font-size: 12px;"><img style="vertical-align: -5px;" src="https://www.zakonyzavcas.cz//img/mail_v2/semaphore_yellow_20.png" alt="něco se chyst&aacute;"> něco se chyst&aacute;</p>'
                +'</td>'
                +'</tr>'
                +'</tbody>'
                +'</table>'
                +'</td>'
                +'<td class="es-hidden" style="padding: 0; margin: 0; width: 20px;">&nbsp;</td>'
                +'</tr>'
                +'</tbody>'
                +'</table>'
                +'<table class="es-left" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-collapse: collapse; border-spacing: 0px; float: left;" cellspacing="0" cellpadding="0" align="left">'
                +'<tbody>'
                +'<tr>'
                +'<td class="es-m-p20b" style="padding: 0; margin: 0; width: 125px;" align="center">'
                +'<table style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-collapse: collapse; border-spacing: 0px;" width="100%" cellspacing="0" cellpadding="0">'
                +'<tbody>'
                +'<tr>'
                +'<td style="padding: 0; margin: 0;" align="left">'
                +'<p style="margin: 0; -webkit-text-size-adjust: none; -ms-text-size-adjust: none; mso-line-height-rule: exactly; font-family: sans-serif; line-height: 18px; color: #333333; font-size: 12px;"><img style="vertical-align: -5px;" src="https://www.zakonyzavcas.cz//img/mail_v2/semaphore_red_20.png" alt="POZOR změna"> POZOR změna</p>'
                +'</td>'
                +'</tr>'
                +'</tbody>'
                +'</table>'
                +'</td>'
                +'</tr>'
                +'</tbody>'
                +'</table>'
                +'<table class="es-right" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-collapse: collapse; border-spacing: 0px; float: right;" cellspacing="0" cellpadding="0" align="right">'
                +'<tbody>'
                +'<tr>'
                +'<td style="padding: 0; margin: 0; width: 125px;" align="center">'
                +'<table style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-collapse: collapse; border-spacing: 0px;" width="100%" cellspacing="0" cellpadding="0">'
                +'<tbody>'
                +'<tr>'
                +'<td style="padding: 0; margin: 0;" align="left">'
                +'<p style="margin: 0; -webkit-text-size-adjust: none; -ms-text-size-adjust: none; mso-line-height-rule: exactly; font-family: sans-serif; line-height: 18px; color: #333333; font-size: 12px;"><img style="vertical-align: -5px;" src="https://www.zakonyzavcas.cz//img/mail_v2/semaphore_blue_20.png" alt="pozitivn&iacute; změna"> pozitivn&iacute; změna</p>'
                +'</td>'
                +'</tr>'
                +'</tbody>'
                +'</table>'
                +'</td>'
                +'</tr>'
                +'</tbody>'
                +'</table></td>'
                +'</tr>'
                +'<tr>'
                +'<td style="padding: 20px; margin: 0;" align="left">'
                +'<table class="es-left" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-collapse: collapse; border-spacing: 0px; float: left;" cellspacing="0" cellpadding="0" align="left">'
                +'<tbody>'
                +'<tr>'
                +'<td class="es-m-p20b" style="padding: 0; margin: 0; width: 270px;" align="left">'
                +'<table style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-collapse: collapse; border-spacing: 0px;" width="100%" cellspacing="0" cellpadding="0">'
                +'<tbody>'
                +'<tr>'
                +'<td style="padding: 0; margin: 0;" align="left">'
                +'<p style="margin: 0; -webkit-text-size-adjust: none; -ms-text-size-adjust: none; mso-line-height-rule: exactly; font-family: sans-serif; line-height: 17px; color: #333333; font-size: 11px;">2022 Z&aacute;kony zavčas<br>Odborn&yacute; garant:<br>&Scaron;k&aacute;ra &amp; Partners, advok&aacute;tn&iacute; kancel&aacute;ř</p>'
                +'<p style="margin: 0; -webkit-text-size-adjust: none; -ms-text-size-adjust: none; mso-line-height-rule: exactly; font-family: sans-serif; line-height: 17px; color: #333333; font-size: 11px;">Milady Hor&aacute;kov&eacute; 2047/23, 602 00 Brno</p>'
                +'</td>'
                +'</tr>'
                +'</tbody>'
                +'</table>'
                +'</td>'
                +'</tr>'
                +'</tbody>'
                +'</table>'
                +'<table class="es-right" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-collapse: collapse; border-spacing: 0px; float: right;" cellspacing="0" cellpadding="0" align="right">'
                +'<tbody>'
                +'<tr>'
                +'<td style="padding: 0; margin: 0; width: 270px;" align="left">'
                +'<table style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-collapse: collapse; border-spacing: 0px;" width="100%" cellspacing="0" cellpadding="0">'
                +'<tbody>'
                +'<tr>'
                +'<td style="padding: 0; margin: 0; font-size: 0px;" align="right"><a style="-webkit-text-size-adjust: none; -ms-text-size-adjust: none; mso-line-height-rule: exactly; text-decoration: underline; color: #2cb543; font-size: 13px;" href="https://www.akskara.cz/" target="_blank"><img class="adapt-img" style="display: block; border: 0; outline: none; text-decoration: none; -ms-interpolation-mode: bicubic;" title="&Scaron;k&aacute;ra &amp; Partners" src="https://www.zakonyzavcas.cz//img/mail_v2/logo.png" alt="&Scaron;k&aacute;ra &amp; Partners" width="140"></a></td>'
                +'</tr>'
                +'</tbody>'
                +'</table>'
                +'</td>'
                +'</tr>'
                +'</tbody>'
                +'</table></td>'
                +'</tr>'
                +'</tbody>'
                +'</table>'
                +'</td>'
                +'</tr>'
                +'</tbody>'
                +'</table>'
                +'</td>'
                +'</tr>'
                +'</tbody>'
                +'</table>'
                +'</div>'
                );

                
                var tempTextarea = $('<textarea>').val(templateHTML.html());
                $('body').append(tempTextarea);
                tempTextarea.select();
                document.execCommand('copy');
                tempTextarea.remove();
                alert('HTML kód je zkopírovaný, připravený pro vložení do šablony!');
                
            });
        }
    });

});