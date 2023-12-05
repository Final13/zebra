import Head from 'next/head';

import { TextLayout } from '@/layouts/TextLayout';
import { HeadMeta } from '@/rckit/meta/HeadMeta';

export default function LinksPrivacyPage() {
  const pageTitle = 'Privacy Policy';

  return (
    <>
      <Head>
        <HeadMeta title={pageTitle} />
      </Head>
      <TextLayout>
        <h1>{pageTitle}</h1>
        bla bla
      </TextLayout>
    </>
  );
}
