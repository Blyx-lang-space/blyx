import BookLayout from '@/components/BookLayout';
import { chapters } from '@/lib/bookContent';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export function generateStaticParams() {
  return Object.keys(chapters).map((slug) => ({ slug }));
}

export default async function ChapterPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const chapter = chapters[slug] || chapters['ch01-getting-started'];

  return (
    <div style={{ background: '#0a0e1a', color: '#e2e8f0', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      <div style={{ flex: 1 }}>
        <BookLayout currentSlug={slug}>
          <div dangerouslySetInnerHTML={{ __html: chapter.html }} />
        </BookLayout>
      </div>
      <Footer />
    </div>
  );
}
