import React from "react";
import { FilteredProductList } from "@/components/productList/FilteredProductList";
import { CarouselProducts } from "../CarouselProducts";

export function Products() {
  return (
    <div className="text-gray-500 flex flex-col gap-5 items-center mt-8 mx-5 font-display">
      <p className="text-white font-display text-2xl sm:text-4xl lg:text-5xl xl:text-8xl font-medium w-5/6 sm:w-3/4 2xl:w-4/5 text-center">
        Découvre nos produits fraichement péchés à la Mégacanne rien que pour toi!
      </p>
      <div className="grid grid-cols-2 gap-10">
        <div className="flex flex-col text-justify xl:text-lg gap-3">
          <p>
            T&apos;as déjà entendu parler de nos events de{" "}
            <span className="text-white">
              <strong>Boxbreak</strong>
            </span>
            ? Tu achètes ici 1 ou plusieurs items qu&apos;on ouvre en live sur{" "}
            <span className="text-white">
              <strong>Twitch</strong>
            </span>{" "}
            ou{" "}
            <span className="text-white">
              <strong>Youtube</strong>
            </span>{" "}
            à une{" "}
            <span className="text-white">
              <strong>date précise</strong>
            </span>{" "}
            devant tout la commu Psyaïeaïe ! Un{" "}
            <span className="text-white">
              <strong>show</strong>
            </span>{" "}
            d&apos;environ{" "}
            <span className="text-white">
              <strong>2 à 3 heures</strong>
            </span>{" "}
            dans lequel tout achat/don/soutien te permet de gagner ou faire gagner des{" "}
            <span className="text-white">
              <strong>cadeaux</strong>
            </span>
            !
          </p>
          <p>
            Avec un peu de chance, tu pourrais même gagner un{" "}
            <span className="text-white">
              <strong>accès VIP</strong>
            </span>{" "}
            à la page de{" "}
            <span className="text-white">
              <strong>vente privée</strong>
            </span>{" "}
            du shop!
          </p>
        </div>
        <div className="flex flex-col">
          <p className="hidden sm:block xl:text-lg text-center">
            Les{" "}
            <span className="text-white">
              <strong>nouvelles tendances</strong>
            </span>{" "}
            bientôt dans ta sacoche! Un{" "}
            <span className="text-white">
              <strong>large choix</strong>
            </span>{" "}
            parmi les produits qui cartonnent en ce moment!!!
          </p>
          <div className="container px-8 mt-4">
            <CarouselProducts collectionIDs={["Q29sbGVjdGlvbjoz"]} />
          </div>
        </div>
        <div className="text-lg">
          <p>
            Fan des{" "}
            <span className="text-white">
              <strong>animés japonais</strong>
            </span>{" "}
            et de leurs incroyables{" "}
            <span className="text-white">
              <strong>produits dérivés</strong>
            </span>
            ? Figurines, goodies, peluches et même exclus du{" "}
            <span className="text-white">
              <strong>Pokémon Center Japan</strong>
            </span>
            !{" "}
            <span className="text-white">
              <strong>Laisse-toi tenter</strong>
            </span>{" "}
            par une de ces{" "}
            <span className="text-white">
              <strong>merveilles</strong>
            </span>{" "}
            d&apos;esthétisme!
          </p>
          <div className="container px-8 mt-4">
            <FilteredProductList attributeFiltersData={[]} collectionIDs={["Q29sbGVjdGlvbjoz"]} />
          </div>
        </div>
        <div className="text-lg">
          <p>
            Tu ne connais pas encore notre marque de prêt-à-porter aux motifs{" "}
            <span className="text-white">
              <strong>100% kawaï</strong>
            </span>
            ? Des{" "}
            <span className="text-white">
              <strong>designs uniques</strong>
            </span>{" "}
            inspirés de tes animés préférés, dessinés par des{" "}
            <span className="text-white">
              <strong>artistes locaus</strong>
            </span>{" "}
            de talent et qui n&apos;attendent que toi pour les sublimer!
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
            Tu{" "}
            <span className="text-white">
              <strong>souhaites offrir</strong>
            </span>{" "}
            un cadeau unique à tes enfants, un.e ami.e ou un.e proche? N&apos;hésites plus et
            choisis entre la formule safe{" "}
            <span className="text-white">
              <strong>&apos;Bundle&apos;</strong>
            </span>{" "}
            et la formule risky{" "}
            <span className="text-white">
              <strong>&apos;Mystery Box&apos;</strong>
            </span>
            !
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
