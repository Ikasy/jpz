import skattekiste from "../assets/skattekiste.svg";
import lokationkiste from "../assets/lokation-kiste.svg"
import { useNavigate } from "react-router-dom";


function Skattejagt() {
  let navigate = useNavigate();

  return (
    <section className="mad skattejagt">
      <p className="tilbageknap" onClick={() => navigate(-1)}>Tilbage</p>
      <h1>Vær med til <b>skattejagt</b></h1>
      <p><b>Velkommen til Den Store Skattejagt i Jyllands Park Zoo!</b></p>
      <p>Kære eventyrere, <br /></p>
      <p>Er I klar til at tage på en spændende rejse gennem Jyllands Park Zoo? I dag bliver I dyrepassere, opdagelsesrejsende og skattejægere! Vi har gemt en række mystiske ledetråde rundt omkring i parken, og det er jeres opgave at finde dem alle for at opdage den hemmelige skat.</p>
      <div className="kiste">
        <img src={skattekiste} alt="skattekiste med mønter" />
      </div>
      <ol type="1"><p><b>Sådan fungerer det:</b></p>
        <li><b>Start: </b>I får det første kort ved indgangen, som viser jer, hvor jeres første ledetråd er gemt.</li>
        <li><b>Ledetråde:</b> Hver ledetråd vil føre jer til et nyt sted i zoo. Vær opmærksomme på de små detaljer og brug jeres dyrebare observationsevner!</li>
        <li><b>Opgaver:</b> Ved hver post skal I løse en lille opgave eller gåde, som vil hjælpe jer videre til næste ledetråd. Opgaverne kan være alt fra at tælle dyr, finde specifikke informationer på skilte, eller tegne noget, I ser.</li>
        <li><b>Skattejagten:</b> Når I har fundet og løst alle ledetråde og opgaver, vil I finde et kort, der viser jer vejen til den hemmelige skat!</li></ol>
      <p><b>For de mindste (op til 6 år): </b> <br />I vil møde sjove dyr og finde enkle gåder, som kan løses med lidt hjælp fra en voksen. Hvem ved, måske får I endda et dyreklistermærke som belønning!</p>
      <p><b>For de modige (7-9 år): </b> <br />I vil møde sjove dyr og finde enkle gåder, som kan løses med lidt hjælp fra en voksen. Hvem ved, måske får I endda et dyreklistermærke som belønning!</p>
      <p><b>For de ældste (10år og op): </b> <br />I vil støde på udfordrende opgaver og mystiske gåder. I skal bruge alle jeres færdigheder og måske endda lidt viden om dyrene for at finde frem til skatten!!</p>
      <ul><b>Tips til en succesfuld skattejagt:</b></ul>
      <li>Arbejd sammen som et team.</li>
      <li>Vær opmærksomme på skiltene og informationerne om dyrene.</li>
      <li>Hav det sjovt og nyd eventyret!</li>
      <p>Vi håber, I er klar til at tage på denne uforglemmelige rejse. Den store skat venter på de klogeste og mest modige skattejægere. God jagt, og må de bedste eventyrere finde skatten! <br /><br /> God fornøjelse!</p>

      <div className="post1">
        <img src={lokationkiste} alt="lokationsmarkør til skattejagt" />
        <p><b>Post 1: Velkomst og Første Ledetråd</b> <br />
          Placering: Ved indgangen. <br />
          Opgave: Find et kort med første ledetråd</p>
      </div>

    </section>
  )
}

export default Skattejagt