import Header from "../components/Header";
import ReviewForm from "../components/ReviewForm";
import Toolbar from "../components/Toolbar";

export default function Submit() {
    return (
      <main>
        <Header title="Submit a Review" />
        <Toolbar />
        <ReviewForm />
      </main>
    );
  }