<template>
  
   <div id="app" style="text-align: center; background-color: #f0fff0;">
    <!-- "Are you a User?" Button -->
    <button class="menu-item user-button" @click="openLoginPopup">
      Are you a User?
    </button>

    <!-- Main Title -->
    <h1 style="color: blue; font-size: 4em; margin-bottom: 0;">Smart City</h1>

    <!-- Subtitle -->
    <h2 style="color: gray; font-size: 2.5em; margin-top: 0;">București</h2>

    <!-- Navigation Menu -->
    <nav style="margin-top: 30px;">
      <router-link to="/" class="menu-item">Home</router-link>
      <router-link to="/service-requests" class="menu-item">Service Requests</router-link>
      <router-link to="/payments" class="menu-item">Payments</router-link>
    </nav>

    <!-- News Section -->
    <section class="news-section">
      <div class="main-news">
        <h3 style="text-align: center; color: blue; font-size: 1.5em;">
          <a href="https://newsbucuresti.ro/ligia-deca-anunta-primele-programe-universitare-in-sistem-dual-ca-in-tarile-dezvoltate/" target="_blank" class="news-link">
            Ligia Deca anunță primele programe universitare în sistem dual, ca în țările dezvoltate
          </a>
        </h3>
        <img src="@/assets/Ligia_Deca.jpg" alt="Main News Image" class="news-image" style="width: 30%; margin: 0 auto;">
      </div>

      <!-- Other News in a Table -->
      <table class="news-table">
        <tr class="news-item">
          <td class="news-thumbnail-cell" style="text-align: center;">
            <img src="@/assets/sun_icon.jpg" alt="Sun Icon" style="width: 30px; vertical-align: middle;"/>
            <img src="@/assets/traffic-jam.jpg" alt="News Image 1" class="news-thumbnail">
          </td>
          <td class="news-content-cell">
            <h4>
              <a href="https://newsbucuresti.ro/aglomeratie-pe-dn1-trafic-intens-intre-nistoresti-si-comarnic-coloana-de-masini-intre-predeal-si-busteni/" target="_blank" class="news-link">
                Aglomerație pe DN1: Trafic intens între Nistorești și Comarnic, coloană de mașini între Predeal și Bușteni
              </a>
            </h4>
          </td>
        </tr>
        <tr class="news-item">
          <td class="news-thumbnail-cell" style="text-align: center;">
            <img src="@/assets/sun_icon.jpg" alt="Sun Icon" style="width: 30px; vertical-align: middle;"/>
            <img src="@/assets/Muzeul_Satului.png" alt="News Image 2" class="news-thumbnail">
          </td>
          <td class="news-content-cell">
            <h4>
              <a href="https://newsbucuresti.ro/muzeul-satului-gazduieste-o-tabara-medievala-cu-ce-surprize-sunt-asteptati-vizitatorii/" target="_blank" class="news-link">
                Muzeul Satului găzduieşte o Tabără Medievală. Cu ce surprize sunt așteptați vizitatorii
              </a>
            </h4>
          </td>
        </tr>
        <tr class="news-item">
          <td class="news-thumbnail-cell" style="text-align: center;">
            <img src="@/assets/sun_icon.jpg" alt="Sun Icon" style="width: 30px; vertical-align: middle;"/>
            <img src="@/assets/Combatere_Ambrozie.jpeg" alt="News Image 3" class="news-thumbnail">
          </td>
          <td class="news-content-cell">
            <h4>
              <a href="https://newsbucuresti.ro/consiliul-judetean-ilfov-ampla-campanie-de-combatere-si-eliminare-a-ambroziei-zonele-unde-s-a-intervenit/" target="_blank" class="news-link">
                Consiliul Județean Ilfov, amplă campanie de combatere și eliminare a ambroziei. Zonele unde s-a intervenit
              </a>
            </h4>
          </td>
        </tr>
        <tr class="news-item">
          <td class="news-thumbnail-cell" style="text-align: center;">
            <img src="@/assets/sun_icon.jpg" alt="Sun Icon" style="width: 30px; vertical-align: middle;"/>
            <img src="@/assets/Catel_Dragut.jpg" alt="News Image 4" class="news-thumbnail">
          </td>
          <td class="news-content-cell">
            <h4>
              <a href="https://newsbucuresti.ro/aspa-organizeaza-targ-de-adoptii-pentru-catei-in-parcul-titan/" target="_blank" class="news-link">
                ASPA organizează târg de adopții pentru căței în Parcul Titan
              </a>
            </h4>
          </td>
        </tr>
        <tr class="news-item">
          <td class="news-thumbnail-cell" style="text-align: center;">
            <img src="@/assets/sun_icon.jpg" alt="Sun Icon" style="width: 30px; vertical-align: middle;"/>
            <img src="@/assets/Gabriel_Militio.jpg" alt="News Image 5" class="news-thumbnail">
          </td>
          <td class="news-content-cell">
            <h4>
              <a href="https://newsbucuresti.ro/fostul-jucator-argentinian-gabriel-milito-candidat-pentru-presedintia-clubului-racing-club/" target="_blank" class="news-link">
                Fostul jucător argentinian Gabriel Milito, candidat pentru preşedintia clubului Racing Club
              </a>
            </h4>
          </td>
        </tr>
        <tr class="news-item">
          <td class="news-thumbnail-cell" style="text-align: center;">
            <img src="@/assets/sun_icon.jpg" alt="Sun Icon" style="width: 30px; vertical-align: middle;"/>
            <img src="@/assets/Parcare_Obor.jpeg" alt="News Image 6" class="news-thumbnail">
          </td>
          <td class="news-content-cell">
            <h4>
              <a href="https://newsbucuresti.ro/noi-locuri-de-parcare-amenajate-langa-obor/" target="_blank" class="news-link">
                Noi locuri de parcare amenajate lângă Obor
              </a>
            </h4>
          </td>
        </tr>
      </table>
    </section>
  </div>
</template>

<!-- <script>
import api from '../api';

export default {
  data() {
    return {
      requests: []
    };
  },
  created() {
    this.loadRequests();
  },
  methods: {
    loadRequests() {
      api.getServiceRequests().then(response => {
        this.requests = response.data;
      });
    }
  }
};
</script> -->