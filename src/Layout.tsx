import React from "react";
import { Link, Outlet, useSearchParams } from "react-router-dom";
import { useCard } from "./database";

function Layout() {

  return (
    <div className="h-screen bg-blue-100">
      <div className="md:container md:mx-auto px-8 py-4">
        <SavedCardAlert />
        <div className="mt-4">
          <Link className="underline" to="cards">
            Show cards
          </Link>
          <Outlet />
        </div>
      </div>
    </div>
  )
}

function SavedCardAlert() {
  const [params] = useSearchParams();
  const savedCardId = params.get('saved-card-id');
  const card = useCard(savedCardId);

  if (!card) {
    return null;
  }

  return (
    <div className="border rounded p-4 bg-white border-green-400">
      Updated {card.display.summary}
    </div>
  );
}

export default Layout;
