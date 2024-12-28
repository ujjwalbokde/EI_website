import React from 'react';
import PropTypes from 'prop-types';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export const SlideNavigation = ({ onPrevious, onNext }) => {
  return (
    <>
      <button
        onClick={onPrevious}
        className="absolute left-8 top-1/2 transform -translate-y-1/2 bg-white/10 backdrop-blur-sm p-4 rounded-full
                 hover:bg-white/20 transition-all duration-300 group"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-8 h-8 text-white group-hover:-translate-x-0.5 transition-transform" />
      </button>
      <button
        onClick={onNext}
        className="absolute right-8 top-1/2 transform -translate-y-1/2 bg-white/10 backdrop-blur-sm p-4 rounded-full
                 hover:bg-white/20 transition-all duration-300 group"
        aria-label="Next slide"
      >
        <ChevronRight className="w-8 h-8 text-white group-hover:translate-x-0.5 transition-transform" />
      </button>
    </>
  );
};

SlideNavigation.propTypes = {
  onPrevious: PropTypes.func.isRequired,
  onNext: PropTypes.func.isRequired,
};