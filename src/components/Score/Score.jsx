import "../Score/Score.css";
import imgDourado from "../../mocks/images/d-dourado.png";
import imgVerde from "../../mocks/images/d-verde.png";
import imgAzul from "../../mocks/images/d-azul.png";
import imgCinza from "../../mocks/images/d-cinza.png";
import imgRoxo from "../../mocks/images/d-roxo.png";

export function Score() {
  return (
    <div>
      <form>
        <div>
          <label for="nome" id="labelNome">
            Nome
          </label>
          <img class="diamantes" src={imgDourado} alt="Dourado" />
        </div>
      </form>
      <form>
        <div>
          <label for="nome" id="labelNome">
            Nome
          </label>
          <img class="diamantes" src={imgVerde} alt="Verde" />
        </div>
      </form>
      <form>
        <div>
          <label for="nome" id="labelNome">
            Nome
          </label>
          <img class="diamantes" src={imgAzul} alt="Azul" />
        </div>
      </form>
      <form>
        <div>
          <label for="nome" id="labelNome">
            Nome
          </label>
          <img class="diamantes" src={imgRoxo} alt="Cinza" />
        </div>
      </form>
      <form>
        <div>
          <label for="nome" id="labelNome">
            Nome
          </label>
          <img class="diamantes" src={imgCinza} alt="Cinza" />
        </div>
      </form>
    </div>
  );
}
