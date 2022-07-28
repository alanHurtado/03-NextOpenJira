interface SeedData{
    entries: SeedEntry[];
}


interface SeedEntry {
  description: string;
  status: string;
  createdAt: number;
}

export const seedData: SeedData = {
  entries: [
    {
      description:
        "Pendiente: Minim nulla nisi irure fugiat nisi anim nostrud occaecat Lorem reprehenderit laboris ipsum commodo id.",
      status: "pedding",
      createdAt: Date.now(),
    },
    {
      description:
        "Progeso: In excepteur aliqua veniam anim proident amet eu amet sunt anim aliqua ullamco.",
      status: "in-progres",
      createdAt: Date.now() - 8798797987,
    },
    {
      description:
        "Terminada Consectetur ipsum duis cupidatat voluptate veniam do sint cillum ad esse esse ipsum occaecat fugiat.",
      status: "finished",
      createdAt: Date.now() - 9879877,
    },
  ],
};
