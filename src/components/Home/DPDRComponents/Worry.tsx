import React from "react";

const Worry = () => {
  return (
    <div className="p-8 text-center">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-4 text-center">Should I Worry?</h1>
        <p className="mb-4 text-lg">
          <span className="font-bold text-xl">NO!</span> DPDR might have some of
          the scariest symptoms out of other anxiety disorders, but you can make
          a full 100% recovery! It does not matter if your DPDR was caused by stress, trauma, severe anxiety disorder, or drugs; recovery is generally the same for all of these causes, as long as we address any underlying factors.
        </p>
        <p className="mb-4 text-lg">
          DPDR is a response caused by your fight or flight system. You have not
          messed up your brain or nervous system. Your brain and nervous system
          believe they are protecting you, but instead, they are causing more
          harm than good.
        </p>
        {/* <div className="border-2 border-cyan-300 p-6 rounded-lg shadow-lg mt-24">
          <p className="text-center text-lg">
            Here at FreeMind, we will show you how to recover from DPDR fully!
            Anyone can make a full recovery! It does not matter if drugs,
            stress, trauma, or severe anxiety caused it.
          </p>
        </div> */}
      </div>
    </div>
  );
};

export default Worry;
