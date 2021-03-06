// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: iqg5FKVqRnpt5mRWXzEUTy
// Component: vamLSxR0rphoV8
import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";

import * as p from "@plasmicapp/react-web";
import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";

import "@plasmicapp/react-web/lib/plasmic.css";
import defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import projectcss from "./plasmic_copy_of_vercel_analytics.module.css"; // plasmic-import: iqg5FKVqRnpt5mRWXzEUTy/projectcss
import sty from "./PlasmicLargeScoreCard.module.css"; // plasmic-import: vamLSxR0rphoV8/css

import LargeScoreIcon from "./icons/PlasmicIcon__LargeScore"; // plasmic-import: MzG9RVjkXp54Li/icon

export type PlasmicLargeScoreCard__VariantMembers = {};
export type PlasmicLargeScoreCard__VariantsArgs = {};
type VariantPropType = keyof PlasmicLargeScoreCard__VariantsArgs;
export const PlasmicLargeScoreCard__VariantProps = new Array<VariantPropType>();

export type PlasmicLargeScoreCard__ArgsType = {};
type ArgPropType = keyof PlasmicLargeScoreCard__ArgsType;
export const PlasmicLargeScoreCard__ArgProps = new Array<ArgPropType>();

export type PlasmicLargeScoreCard__OverridesType = {
  root?: p.Flex<"div">;
  svg?: p.Flex<"svg">;
};

export interface DefaultLargeScoreCardProps {
  className?: string;
}

function PlasmicLargeScoreCard__RenderFunc(props: {
  variants: PlasmicLargeScoreCard__VariantsArgs;
  args: PlasmicLargeScoreCard__ArgsType;
  overrides: PlasmicLargeScoreCard__OverridesType;
  forNode?: string;
}) {
  const { variants, args, overrides, forNode } = props;

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(defaultcss.all, projectcss.root_reset, sty.root)}
    >
      <LargeScoreIcon
        data-plasmic-name={"svg"}
        data-plasmic-override={overrides.svg}
        className={classNames(defaultcss.all, sty.svg)}
        role={"img"}
      />
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "svg"],
  svg: ["svg"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<
  T extends NodeNameType
> = typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  svg: "svg";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicLargeScoreCard__OverridesType,
  DescendantsType<T>
>;

type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicLargeScoreCard__VariantsArgs;
    args?: PlasmicLargeScoreCard__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicLargeScoreCard__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicLargeScoreCard__ArgsType, ReservedPropsType> &
    // Specify overrides for each element directly as props
    Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    // Specify props for the root element
    Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicLargeScoreCard__ArgProps,
      internalVariantPropNames: PlasmicLargeScoreCard__VariantProps
    });

    return PlasmicLargeScoreCard__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicLargeScoreCard";
  } else {
    func.displayName = `PlasmicLargeScoreCard.${nodeName}`;
  }
  return func;
}

export const PlasmicLargeScoreCard = Object.assign(
  // Top-level PlasmicLargeScoreCard renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    svg: makeNodeComponent("svg"),

    // Metadata about props expected for PlasmicLargeScoreCard
    internalVariantProps: PlasmicLargeScoreCard__VariantProps,
    internalArgProps: PlasmicLargeScoreCard__ArgProps
  }
);

export default PlasmicLargeScoreCard;
/* prettier-ignore-end */
