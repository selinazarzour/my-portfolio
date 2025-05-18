import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";

const SlideComparison = () => {
    return (
        <div className="p-6 space-y-8">
            <h1 className="text-3xl font-bold">Sparse Coding vs Product Sparsity</h1>

            <Tabs defaultValue="sparse" className="w-full">
                <TabsList className="mb-4">
                    <TabsTrigger value="sparse">Sparse Coding</TabsTrigger>
                    <TabsTrigger value="product">Product Sparsity</TabsTrigger>
                </TabsList>

                <TabsContent value="sparse">
                    <Card>
                        <CardContent className="space-y-4 p-6">
                            <h2 className="text-xl font-semibold">🧠 What is it?</h2>
                            <p>
                                Preprocessing technique that compresses images by extracting key local features.
                            </p>
                            <h2 className="text-xl font-semibold">⚙️ When it Happens</h2>
                            <p>
                                Before sending images into the SNN (offline feature reduction).
                            </p>
                            <h2 className="text-xl font-semibold">🎯 Purpose</h2>
                            <p>
                                Reduce redundancy in the input and extract only important edges, textures, and features.
                            </p>
                            <h2 className="text-xl font-semibold">🔍 Output</h2>
                            <p>
                                A sparsified image (fewer active pixels), better aligned with brain-like activity.
                            </p>
                            <h2 className="text-xl font-semibold">💡 Use Case</h2>
                            <p>
                                Efficient encoding of camera images before spike encoding.
                            </p>
                        </CardContent>
                    </Card>
                </TabsContent>

                <TabsContent value="product">
                    <Card>
                        <CardContent className="space-y-4 p-6">
                            <h2 className="text-xl font-semibold">🧠 What is it?</h2>
                            <p>
                                Computation reuse technique for SNNs that avoids recalculating repeated spike patterns.
                            </p>
                            <h2 className="text-xl font-semibold">⚙️ When it Happens</h2>
                            <p>
                                During the forward pass of the SNN across time steps.
                            </p>
                            <h2 className="text-xl font-semibold">🎯 Purpose</h2>
                            <p>
                                Reduce energy and time by reusing previous matrix multiplication results.
                            </p>
                            <h2 className="text-xl font-semibold">🔍 Output</h2>
                            <p>
                                Same output as regular SNN but computed faster by avoiding duplicate work.
                            </p>
                            <h2 className="text-xl font-semibold">💡 Use Case</h2>
                            <p>
                                Real-time autonomous driving where spike patterns are often similar across frames.
                            </p>
                        </CardContent>
                    </Card>
                </TabsContent>
            </Tabs>

            <Separator className="my-6" />

            <div className="grid md:grid-cols-2 gap-6">
                <Card>
                    <CardContent className="p-6">
                        <h2 className="text-xl font-semibold mb-2">🔄 Key Difference</h2>
                        <p>
                            <strong>Sparse Coding:</strong> Reduces the size and complexity of the input <em>before</em> entering the network.
                        </p>
                        <p className="mt-2">
                            <strong>Product Sparsity:</strong> Optimizes the internal computation <em>during</em> network execution.
                        </p>
                    </CardContent>
                </Card>

                <Card>
                    <CardContent className="p-6">
                        <h2 className="text-xl font-semibold mb-2">🚀 Impact on Autonomous Driving</h2>
                        <p>
                            Combines the power of preprocessing (sparse coding) and real-time speedups (product sparsity) to create energy-efficient, high-performance systems.
                        </p>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default SlideComparison;
