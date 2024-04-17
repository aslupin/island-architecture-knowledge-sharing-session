import { Head } from "$fresh/runtime.ts";
import { useSignal } from "@preact/signals";


import { Handlers, PageProps } from "$fresh/server.ts";
import Comments from "../islands/Comments.tsx";
import Counter from "../islands/Counter.tsx";

interface Content {
  title: string;
  description: string;
}

export const handler: Handlers<Content | null> = {
  async GET(_, ctx) {
    const resp = await Promise.resolve({
      title: 'Blog A',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
    });

    
    return ctx.render(resp);
  },
};

export default function Home({ data }: PageProps<Content | null>) {
  if (!data) {
    return <h1>Content Not Found</h1>
  }

  const count = useSignal(3);
  const comments = useSignal([
    {
      name: 'Luffy',
      text: 'wowwwwww',
      like: 1
    },
    {
      name: 'Gojo',
      text: 'interesting',
      like: 1000,
    },
    {
      name: 'Luffy',
      text: 'wowwwwww',
      like: 1
    },
    // {
    //   name: 'Gojo',
    //   text: 'interesting',
    //   like: 1000,
    // },
    // {
    //   name: 'Luffy',
    //   text: 'wowwwwww',
    //   like: 1
    // },
    // {
    //   name: 'Gojo',
    //   text: 'interesting',
    //   like: 1000,
    // },{
    //   name: 'Luffy',
    //   text: 'wowwwwww',
    //   like: 1
    // },
    // {
    //   name: 'Gojo',
    //   text: 'interesting',
    //   like: 1000,
    // },{
    //   name: 'Luffy',
    //   text: 'wowwwwww',
    //   like: 1
    // },
    // {
    //   name: 'Gojo',
    //   text: 'interesting',
    //   like: 1000,
    // },{
    //   name: 'Luffy',
    //   text: 'wowwwwww',
    //   like: 1
    // },
    // {
    //   name: 'Gojo',
    //   text: 'interesting',
    //   like: 1000,
    // },{
    //   name: 'Luffy',
    //   text: 'wowwwwww',
    //   like: 1
    // },
    // {
    //   name: 'Gojo',
    //   text: 'interesting',
    //   like: 1000,
    // },{
    //   name: 'Luffy',
    //   text: 'wowwwwww',
    //   like: 1
    // },
    // {
    //   name: 'Gojo',
    //   text: 'interesting',
    //   like: 1000,
    // },{
    //   name: 'Luffy',
    //   text: 'wowwwwww',
    //   like: 1
    // },
    // {
    //   name: 'Gojo',
    //   text: 'interesting',
    //   like: 1000,
    // },{
    //   name: 'Luffy',
    //   text: 'wowwwwww',
    //   like: 1
    // },
    // {
    //   name: 'Gojo',
    //   text: 'interesting',
    //   like: 1000,
    // },{
    //   name: 'Luffy',
    //   text: 'wowwwwww',
    //   like: 1
    // },
    // {
    //   name: 'Gojo',
    //   text: 'interesting',
    //   like: 1000,
    // },{
    //   name: 'Luffy',
    //   text: 'wowwwwww',
    //   like: 1
    // },
    // {
    //   name: 'Gojo',
    //   text: 'interesting',
    //   like: 1000,
    // },{
    //   name: 'Luffy',
    //   text: 'wowwwwww',
    //   like: 1
    // },
    // {
    //   name: 'Gojo',
    //   text: 'interesting',
    //   like: 1000,
    // },{
    //   name: 'Luffy',
    //   text: 'wowwwwww',
    //   like: 1
    // },
    // {
    //   name: 'Gojo',
    //   text: 'interesting',
    //   like: 1000,
    // },{
    //   name: 'Luffy',
    //   text: 'wowwwwww',
    //   like: 1
    // },
    // {
    //   name: 'Gojo',
    //   text: 'interesting',
    //   like: 1000,
    // },{
    //   name: 'Luffy',
    //   text: 'wowwwwww',
    //   like: 1
    // },
    // {
    //   name: 'Gojo',
    //   text: 'interesting',
    //   like: 1000,
    // },{
    //   name: 'Luffy',
    //   text: 'wowwwwww',
    //   like: 1
    // },
    // {
    //   name: 'Gojo',
    //   text: 'interesting',
    //   like: 1000,
    // },{
    //   name: 'Luffy',
    //   text: 'wowwwwww',
    //   like: 1
    // },
    // {
    //   name: 'Gojo',
    //   text: 'interesting',
    //   like: 1000,
    // },{
    //   name: 'Luffy',
    //   text: 'wowwwwww',
    //   like: 1
    // },
    // {
    //   name: 'Gojo',
    //   text: 'interesting',
    //   like: 1000,
    // }
  ]);

  return (
    <>
      <Head>
        <title>{data.title}</title>
      </Head>
      <div class="px-4 py-8 mx-auto bg-[#86efac]">
        <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center">
          <img
            class="my-6"
            src="/logo.svg"
            width="128"
            height="128"
            alt="the fresh logo: a sliced lemon dripping with juice"
          />
          <h1 class="text-4xl font-bold">{data.description}</h1>
          <p class="my-4">
            Try updating this message in the
            <code class="mx-2">./routes/index.tsx</code> file, and refresh.
          </p>
          <Counter count={count} />
        </div>
      </div>
      
      <div class="flex flex-col gap-8 py-6">
        <div style="width: 50%; margin: auto;">
          {
            comments.value.map((comment, index) => (
                <Comments index={index} {...comment} />
            ))
          }
        </div>
      </div>
    </>
  );
}
