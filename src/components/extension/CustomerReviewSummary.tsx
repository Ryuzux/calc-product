import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

interface RatingData {
  average: number;
  totalRatings: number;
  totalReviews: number;
  ratingsBreakdown: {
    [key: number]: number;
  };
}

export default function CustomerReviewSummary({
  average,
  totalRatings,
  totalReviews,
  ratingsBreakdown,
}: RatingData) {
  const maxCount = Math.max(...Object.values(ratingsBreakdown));

  return (
    <Card className="w-full max-w-3xl">
      <CardContent className="p-6">
        <h3 className="text-lg font-semibold mb-4">ULASAN PEMBELI</h3>
        <div className="flex flex-col sm:flex-row gap-6">
          
          <div className="flex flex-col items-center sm:items-start justify-center sm:w-1/3 text-center sm:text-left">
            <div className="text-orange-500 text-3xl">★</div>
            <div className="text-2xl font-bold">
              {average.toFixed(1)} <span className="text-muted-foreground text-base">/ 5.0</span>
            </div>
            <p className="text-sm text-muted-foreground mt-1">
              {Math.round((ratingsBreakdown[5] / totalRatings) * 100)}% pembeli merasa puas
            </p>
            <p className="text-sm text-muted-foreground">{totalRatings} rating. {totalReviews} ulasan</p>
          </div>

          <div className="sm:w-2/3 flex flex-col gap-2">
            {[5, 4, 3, 2, 1].map((star) => {
              const count = ratingsBreakdown[star] || 0;
              const progress = maxCount > 0 ? (count / maxCount) * 100 : 0;

              return (
                <div key={star} className="flex items-center gap-2">
                  <span className="text-orange-500 text-sm w-4">★</span>
                  <Progress value={progress} className="w-full h-2" />
                  <span className="text-sm w-5 text-right">{count}</span>
                </div>
              );
            })}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
