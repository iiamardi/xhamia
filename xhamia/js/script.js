$(document).ready(function() {
     
    $("a").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            const hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){
                window.location.hash = hash;
            });
        }
    });

     
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('.navbar').addClass('scrolled');
        } else {
            $('.navbar').removeClass('scrolled');
        }
    });
});

 
window.addEventListener('load', function() {
  const splash = document.getElementById('splash-screen');
  const mainContent = document.getElementById('main-content');
  
   
  setTimeout(function() {
    splash.classList.add('slide-out');
    
     
    setTimeout(function() {
      mainContent.classList.remove('d-none');
      splash.style.display = 'none';
    }, 500); 
  }, 1000);  
});


 const toggleButton = document.getElementById('toggleButton');
const bankTable = document.getElementById('bankTable');
let isVisible = false;

 
const tableHTML = `
<div class="table-responsive">
  <table class="table table-bordered table-striped" style="width: 100%;">
      <thead class="">
          <tr>
              <th>Swift Code</th>
              <th>Name of Correspondent Bank</th>
              <th>Currency</th>
          </tr>
      </thead>
      <tbody>
          <tr>
              <td>DEUTDEFFXXX</td>
              <td>DEUTSCHE BANK AG, Germany</td>
              <td>EUR/CHF/GBP</td>
          </tr>
          <tr>
              <td>BKTRUS33XXX</td>
              <td>DEUTSCHE BANK TRUST, NY, USA</td>
              <td>USD</td>
          </tr>
          <tr>
              <td>RZBAATWW</td>
              <td>RAIFFEISEN BANK INTERNATIONAL, AUSTRIA</td>
              <td>USD/EUR</td>
          </tr>
          <tr>
              <td>LJBASI2X</td>
              <td>NOVA LJUBLJANSKA BANKA, SLOVENIA</td>
              <td>EUR/CHF/USD</td>
          </tr>
          <tr>
              <td>YAPITRIS</td>
              <td>YAPI VE KREDI BANKASI, TURKEY</td>
              <td>EUR/USD</td>
          </tr>
          <tr>
              <td>BKAUATWW</td>
              <td>UNICREDIT BANK AUSTRIA, AUSTRIA</td>
              <td>EUR/CHF</td>
          </tr>
          <tr>
              <td>USALALTR</td>
              <td>INTESA SAN PAOLO, ALBANIA</td>
              <td>EUR/CHF/USD</td>
          </tr>
          <tr>
              <td>UNALALTR</td>
              <td>UNION BANK, ALBANIA</td>
              <td>EUR/CHF/USD</td>
          </tr>
          <tr>
              <td>KREDBEBB</td>
              <td>KBC BANK, BELGIUM</td>
              <td>EUR/CHF/GBP</td>
          </tr>
      </tbody>
  </table>
</div>

`;

toggleButton.addEventListener('click', function() {
    if (!isVisible) {
        bankTable.innerHTML = tableHTML;
        bankTable.style.display = 'block';
        toggleButton.textContent = 'Fsheh tabelën';
        isVisible = true;
    } else {
        bankTable.innerHTML = '';
        bankTable.style.display = 'none';
        toggleButton.textContent = 'Shfaq tabelën';
        isVisible = false;
    }
});