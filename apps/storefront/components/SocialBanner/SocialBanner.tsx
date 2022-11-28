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
    <div className="bg-slate-600 w-screen h-11 flex items-center">
      <a href="https://twitter.com/?lang=fr" className="ml-3">
        <svg height="20px" viewBox="0 0 30 24">
          <path
            fill="white"
            d="M29.55 2.85a12.813 12.813 0 0 1-3.004 3.106l-.036.025q.018.262.018.787a17.203 17.203 0 0 1-.745 4.987l.032-.122a17.56 17.56 0 0 1-2.206 4.724l.04-.065a18.49 18.49 0 0 1-3.435 3.927l-.024.02a15.333 15.333 0 0 1-4.73 2.704l-.108.033c-1.765.648-3.803 1.022-5.928 1.022H9.29h.007h-.127c-3.41 0-6.584-1.015-9.234-2.76l.063.039c.419.048.904.075 1.396.075h.07h-.004l.126.001c2.807 0 5.386-.975 7.417-2.606l-.023.018a6.073 6.073 0 0 1-5.65-4.157l-.012-.043c.342.057.738.091 1.141.094h.003a6.26 6.26 0 0 0 1.637-.216l-.044.01a5.98 5.98 0 0 1-3.47-2.08l-.008-.011a5.816 5.816 0 0 1-1.379-3.773l.001-.084v.004v-.075a5.922 5.922 0 0 0 2.727.768h.011a6.094 6.094 0 0 1-1.953-2.129l-.016-.031a6 6 0 0 1-.731-2.889c0-1.126.306-2.18.84-3.084l-.015.028a17.29 17.29 0 0 0 5.425 4.427l.095.045c2.022 1.067 4.402 1.743 6.927 1.864l.038.001a6.548 6.548 0 0 1-.149-1.382v-.001a6.062 6.062 0 0 1 10.477-4.147l.003.003A11.857 11.857 0 0 0 28.772.415l-.053.03a5.913 5.913 0 0 1-2.635 3.323l-.028.015a12.045 12.045 0 0 0 3.569-.967l-.077.031z"
          ></path>
        </svg>
      </a>
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
      <div className="ml-8 text-white text-lg">{itemsName}</div>
    </div>
  );
}

export default SocialBanner;
