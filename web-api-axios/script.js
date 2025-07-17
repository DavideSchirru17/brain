// URL dell'API ReqRes.in - pagina 2 degli utenti
const url = "https://reqres.in/api/users?page=2";

// Funzione asincrona per recuperare i dati degli utenti
const fetchUsers = async () => {
  try {
    // Correzione 1: ReqRes.in è un'API pubblica gratuita, non serve API key
    // Correzione 2: Axios syntax corretta - niente headers necessari
    const response = await axios.get(url);

    // Correzione 3: Con Axios, response.data contiene già i dati JSON
    // Non serve await perché non è una promise
    const data = response.data;
    console.log("Dati ricevuti dall'API:", data);

    // Conversione in stringa JSON per debug/visualizzazione
    const stringi = JSON.stringify(data, null, 2); // Formattazione con indentazione
    console.log("JSON formattato:", stringi);

    // Popolamento elementi HTML con correzioni

    // Informazioni sulla pagina
    document.querySelector(".page-number").innerHTML = data.page;
    // Correzione 4: L'API ReqRes restituisce "total_pages", non "per_page"
    document.querySelector(".total-pages").innerHTML = data.total_pages;

    // Primo utente della lista
    if (data.data && data.data.length > 0) {
      const firstUser = data.data[0];

      // Avatar (immagine) - src è corretto
      document.querySelector(".user__avatar").src = firstUser.avatar;

      // Correzione 5: Nome completo - innerHTML invece di src
      document.querySelector(".user__name").innerHTML =
        firstUser.first_name + " " + firstUser.last_name;

      // Correzione 6: Email - innerHTML invece di src
      document.querySelector(".user__email").innerHTML = firstUser.email;
    }

    // Informazioni di supporto/pubblicità
    if (data.support) {
      document.querySelector(".ad").innerHTML = data.support.text;
    }

    // Correzione 7: Controllo se gli elementi esistono prima di usarli
    const preElement = document.querySelector(".pre");
    const codeElement = document.querySelector(".code");

    if (preElement) {
      preElement.innerHTML = stringi;
    }
    if (codeElement) {
      codeElement.innerHTML = stringi;
    }
  } catch (error) {
    // Gestione errori migliorata con più dettagli
    console.error("Errore durante la richiesta API:");
    console.error("Messaggio:", error.message);

    // Se è un errore HTTP, mostra dettagli della risposta
    if (error.response) {
      console.error("Status:", error.response.status);
      console.error("Status Text:", error.response.statusText);
      console.error("Response Data:", error.response.data);
    }

    // Se è un errore di rete
    if (error.request) {
      console.error("Nessuna risposta ricevuta:", error.request);
    }
  }
};

// Chiamata della funzione quando la pagina è caricata
fetchUsers();

// // call the async function that we just created
// fetchUsers();
