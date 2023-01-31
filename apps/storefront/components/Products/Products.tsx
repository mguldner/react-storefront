import React from "react";
import { FilteredProductList } from "@/components/productList/FilteredProductList";

export function Products() {
  return (
    <div className="flex flex-col gap-5 items-center mt-8 mx-5 text-white font-display">
      <p className="text-white font-display text-2xl sm:text-4xl lg:text-5xl xl:text-8xl font-medium w-5/6 sm:w-3/4 2xl:w-4/5 text-center">
        {"Découvre nos produits fraichement péchés à la Mégacanne rien que pour toi!"}
      </p>
      <div className="grid grid-cols-2 gap-10">
        <div className="flex flex-col text-justify xl:text-lg gap-3">
          <p>
            {
              "T'as déjà entendu parler de nos events de <strong>Boxbreak</strong>? Tu achètes ici 1 ou plusieurs items qu'on ouvre en live sur <strong>Twitch</strong> ou <strong>Youtube</strong> à une <strong>date précise</strong> devant tout la commu Psyaïeaïe ! Un <strong>show</strong> d'environ <strong>2 à 3 heures</strong> dans lequel tout achat/don/soutien te permet de gagner ou faire gagner des <strong>cadeaux</strong>!"
            }
          </p>
          <p>
            {
              "Avec un peu de chance, tu pourrais même gagner un <strong>accès VIP</strong> à la page de <strong>vente privée</strong> du shop!"
            }
          </p>
        </div>
        <div className="flex flex-col">
          <p className="hidden sm:block xl:text-lg text-center">
            {
              "Les <strong>nouvelles tendances</strong> bientôt dans ta sacoche! Un <strong>large choix</strong> parmi les produits qui cartonnent en ce moment!!!"
            }
          </p>
          <div className="container px-8 mt-4">
            <FilteredProductList attributeFiltersData={[]} collectionIDs={["Q29sbGVjdGlvbjoz"]} />
          </div>
        </div>
        <div className="text-lg">
          <p>
            {
              "Fan des <strong>animés japonais</strong> et de leurs incroyables <strong>produits dérivés</strong>? Figurines, goodies, peluches et même exclus du <strong>Pokémon Center Japan</strong>! <strong>Laisse-toi tenter</strong> par une de ces <strong>merveilles</strong> d'esthétisme!"
            }
          </p>
        </div>
        <div className="text-lg">
          <p>
            {
              "Tu ne connais pas encore notre marque de prêt-à-porter aux motifs <strong>100% kawaï</strong>? Des <strong>designs uniques</strong> inspirés de tes animés préférés, dessinés par des <strong>artistes locaus</strong> de talent et qui n'attendent que toi pour les sublimer!"
            }
          </p>
          <iframe
            title={"Présentation du shop"}
            src={`https://www.youtube.com/embed/qa4JCsdV-KA`}
            className="px-10 w-full aspect-[5/3]"
            allowFullScreen
          />
        </div>
        <div className="text-lg">
          <p>
            {
              "Tu <strong>souhaites offrir</strong> un cadeau unique à tes enfants, un.e ami.e ou un.e proche? N'hésites plus et choisis entre la formule safe <strong>'Bundle'</strong> et la formule risky <strong>'Mystery Box'</strong>!"
            }
          </p>
          <iframe
            title={"Présentation du shop"}
            src={`https://www.youtube.com/embed/qa4JCsdV-KA`}
            className="px-10 w-full aspect-[5/3]"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
}
