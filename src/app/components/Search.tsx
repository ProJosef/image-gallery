"use client";
import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";

export default function Search() {
  const [search, setSearch] = useState("");
  const route = useRouter();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    search && route.push(`/results/${search}`);
    setSearch("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search"
        className="p-2 bg-white rounded-xl"
      />
    </form>
  );
}
