export default function Github() {
  return (
    <section className="py-28 bg-white/5 text-center">
      <h2 className="text-4xl font-bold mb-10">GitHub Activity</h2>

      <div className="flex justify-center">
        <img
          src="https://github-readme-stats.vercel.app/api?username=YOUR_GITHUB_USERNAME&theme=dark&hide_border=true"
          alt="github stats"
        />
      </div>
    </section>
  );
}
