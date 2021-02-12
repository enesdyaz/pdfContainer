<template>
  <div class='main'>
    <vue-html2pdf
      :show-layout="false"
      :float-layout="false"
      :enable-download="true"
      :preview-modal="false"
      :filename="`harry`"
      :paginate-elements-by-height="1100"
      :pdf-format="`a4`"
      :pdf-orientation="`portrait`"
      :pdf-content-width="800"
      :pdf-quality="2"

      :manual-pagination="false"

      :html-to-pdf-options="htmlToPdfOptions"
      @progress="onProgress($event)"
      @startPagination="startPagination()"
      @hasPaginated="hasPaginated()"
      @beforeDownload="beforeDownload($event)"
      @hasDownloaded="hasDownloaded($event)"
      ref="html2Pdf"
    >
      <pdf-content @domRendered="domRendered()" slot="pdf-content" />
    </vue-html2pdf>
    <v-btn text outllined color='white' dark @click='downloadPdf'>generate PDF</v-btn>
    <section class="title-container">
      <h1 class="title-header">Vue HTML2PDF</h1>
    </section>

  
  </div>
</template>

<script>
import PdfContent from "@/components/PdfContent";
import ControlsContainer from "@/components/ControlsContainer";
import VueHtml2pdf from 'vue-html2pdf'

export default {
  name: "app",
  components: {
    VueHtml2pdf,
    PdfContent,
    ControlsContainer,
  },

  data() {
    return {
      contentRendered: false,
      progress: 0,
      generatingPdf: false,
      pdfDownloaded: false,
    };
  },

  computed: {
    htmlToPdfOptions() {
      return {
        margin: 0,

        filename: "hee hee.pdf",

        image: {
          type: "jpeg",
          quality: 0.98,
        },

        enableLinks: false,

        html2canvas: {
          scale: 2,
          useCORS: true,
        },

        jsPDF: {
          unit: "in",
          format: `a4`,
          orientation: `portrait`,
        },
      };
    },
  },

  methods: {
    async downloadPdf() {
      this.$refs.html2Pdf.generatePdf();
    },

    

    onProgress(progress) {
      this.progress = progress;
      console.log(`PDF generation progress: ${progress}%`)
    },

    startPagination() {
      console.log(`PDF has started pagination`)
    },

    hasPaginated () {
      console.log(`PDF has been paginated`)
    },

    async beforeDownload ({ html2pdf, options, pdfContent }) {
      console.log(`On Before PDF Generation`)
      // await html2pdf().set(options).from(pdfContent).toPdf().get('pdf').then((pdf) => {
			// 	const totalPages = pdf.internal.getNumberOfPages()
			// 	for (let i = 1; i <= totalPages; i++) {
			// 		pdf.setPage(i)
			// 		pdf.setFontSize(10)
			// 		pdf.setTextColor(150)
			// 		pdf.text('Page ' + i + ' of ' + totalPages, (pdf.internal.pageSize.getWidth() * 0.88), (pdf.internal.pageSize.getHeight() - 0.3))
			// 	} 
			// }).save()
    },

    hasDownloaded (blobPdf) {
      console.log(`PDF has downloaded yehey`)
      this.pdfDownloaded = true
      console.log(blobPdf)
    },

    domRendered() {
      console.log("Dom Has Rendered");
      this.contentRendered = true;
    },

    onBlobGenerate(blob) {
      console.log(blob);
    },
  },


};
</script>

<style lang="scss" scoped>
body {
  width: 100%;
  padding: 0;
  margin: 0;
}
.main {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #141e30; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to bottom,
    #243b55,
    #141e30
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to bottom,
    #243b55,
    #141e30
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  flex-direction: column;
  overflow: hidden;

  .title-container {
    min-height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
  }

  .title-header {
    color: #fff;
    padding: 25px 50px;
    border: 5px solid #fff;
    border-radius: 5px;
    opacity: 0;

    animation-name: animate-fade-in-top;

    animation-fill-mode: forwards;
    animation-timing-function: ease-in-out;
  }
}


</style>
