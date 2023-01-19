import { useSocialbannerMenuQuery } from "@/saleor/api";
import { useRegions } from "../RegionsProvider";

// Icônes récupérées via https://icones.js.org/
export function SocialBanner() {
  const { query } = useRegions();

  const { error, data } = useSocialbannerMenuQuery({
    variables: { ...query },
  });

  if (error) {
    console.error("Social Banner/Menu component error : ", error.message);
  }

  const menuItems = data?.menu?.items || [],
    itemsName = menuItems.map(({ name }) => name).join(" || ");

  return (
    <div className="bg-gradient-to-r from-slate-500 to-sky-500 h-11 grid grid-cols-3 items-center">
      <div className="flex flex-row items-center">
        <a href="https://www.youtube.com/" className="ml-3">
          <svg height="25px" viewBox="0 0 24 24">
            <path
              fill="white"
              d="m10 15l5.19-3L10 9v6m11.56-7.83c.13.47.22 1.1.28 1.9c.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83c-.25.9-.83 1.48-1.73 1.73c-.47.13-1.33.22-2.65.28c-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44c-.9-.25-1.48-.83-1.73-1.73c-.13-.47-.22-1.1-.28-1.9c-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83c.25-.9.83-1.48 1.73-1.73c.47-.13 1.33-.22 2.65-.28c1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44c.9.25 1.48.83 1.73 1.73Z"
            />
          </svg>
        </a>
        <a href="https://www.instagram.com/?hl=fr" className="ml-3">
          <svg height="20px" viewBox="0 0 24 24">
            <path
              fill="white"
              d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3Z"
            />
          </svg>
        </a>
        <a href="https://www.instagram.com/?hl=fr" className="ml-3">
          <svg height="20px" viewBox="0 0 24 24">
            <path
              fill="white"
              d="M16.6 5.82s.51.5 0 0A4.278 4.278 0 0 1 15.54 3h-3.09v12.4a2.592 2.592 0 0 1-2.59 2.5c-1.42 0-2.6-1.16-2.6-2.6c0-1.72 1.66-3.01 3.37-2.48V9.66c-3.45-.46-6.47 2.22-6.47 5.64c0 3.33 2.76 5.7 5.69 5.7c3.14 0 5.69-2.55 5.69-5.7V9.01a7.35 7.35 0 0 0 4.3 1.38V7.3s-1.88.09-3.24-1.48z"
            />
          </svg>
        </a>
      </div>
      <div className="text-white text-lg text-center">{itemsName}</div>
    </div>
  );
}

export default SocialBanner;
