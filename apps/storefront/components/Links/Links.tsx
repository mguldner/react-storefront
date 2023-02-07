import React from "react";

export function Links() {
  return (
    <div className="text-gray-500 text-center font-display flex flex-col gap-10">
      <p className="text-white text-8xl">
        Tu souhaites nous contacter, voir notre activité sur les réseaux sociaux ou obtenir des
        informations sur notre société?
      </p>
      <p className="text-4xl">
        Utilise le Vogue Merry pour te rendre sur l&apos;île qui contient les informations dont tu
        as besoin
      </p>
      <div className="grid grid-cols-3 text-4xl">
        <div className="flex flex-col gap-8">
          <div className="gap-3">
            <p className="uppercase text-white">Marine Ford</p>
            <p>Mieux protégé que ton compte en banque!</p>
          </div>
          <div className="gap-3">
            <p>Mentions légales</p>
            <p>Conditions générales de vente</p>
            <p>Contacts</p>
          </div>
        </div>

        <div className="flex flex-col gap-8">
          <div className="gap-3">
            <p className="uppercase text-white">La fontaine des rêves</p>
            <p>A mi-chemin entre Skypédia et Dreamland</p>
          </div>
          <div className="gap-3">
            <p>Mon compte client</p>
            <p>L&apos;aventure Psyaïeaïe Studio</p>
            <p>Trouver notre shop</p>
            <p>Programme de fidélité</p>
          </div>
        </div>

        <div className="flex flex-col gap-8">
          <div className="gap-3">
            <p className="uppercase text-white">L&apos;île de Kedétrau</p>
            <p>Rejoins notre équipage sur les réseaux en t&apos;abonnant</p>
          </div>
          <div className="gap-3">
            <p>Insta</p>
            <p>TikTok</p>
            <p>Youtube</p>
            <p>Twitch</p>
            <p>Voggt</p>
          </div>
        </div>
      </div>
    </div>
  );
}
