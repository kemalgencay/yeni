// Step 1: Import React
import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import Layout from '../components/layout';

// Step 2: Define your component
const IndexPage = () => {
  return (
    <Layout pageTitle="Ana Sayfa">
      <p>
        <h5>
          Ben Kemal, 1967'den beri <i>computer* </i>üstünde yenilikleri izliyor ve uyguluyorum.
        </h5>
        <p>
          Çeşitli konulardaki görüşlerimi, deneyimlerimi, özlü sözleri, burada paylaşmaktayım. Çizgim Atatürk
          çizgisidir, ikinci vazifemiz devrimleri Anadolu'ya yaymaktır.
        </p>
        <p> *bilgisayar değil, bilgi soyuttur sayılamaz</p>
      </p>
      <p>
        <StaticImage alt="zuzukemal" src="../images/zuzukemal.jpg" />
      </p>
    </Layout>
  );
};

// Step 3: Export your component
export default IndexPage;
