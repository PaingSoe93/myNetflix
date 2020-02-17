import * as React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  cursor: pointer;
  min-width: ${(props: { width: number }) => `${props.width - 1}%`};
  height: 100%;
  margin-right: 0.5%;
  margin-left: 0.5%;
  background-color: black;
  color: white;
`;

export interface MovieProps {
  id: number;
  index: number;
  movies: Array<any>;
  width: number;
  ref?:any
}

const Movie: React.ForwardRefExoticComponent<MovieProps> = React.forwardRef((props, ref:any) => {
  const { movies, index, width, id } = props;
  return (
    <Wrapper width={width} ref={ref}>
      {id}
    </Wrapper>
  );
});

export default Movie;
