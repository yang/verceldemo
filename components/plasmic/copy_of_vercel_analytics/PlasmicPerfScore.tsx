// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: iqg5FKVqRnpt5mRWXzEUTy
// Component: wsu9Jbk2t-1HP
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
import SmallScoreCard from "../../SmallScoreCard"; // plasmic-import: 2XZOm-2P99X-no/component
import Separator from "../../Separator"; // plasmic-import: 2Z0w-3TeyDKh4/component

import "@plasmicapp/react-web/lib/plasmic.css";
import defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import projectcss from "./plasmic_copy_of_vercel_analytics.module.css"; // plasmic-import: iqg5FKVqRnpt5mRWXzEUTy/projectcss
import sty from "./PlasmicPerfScore.module.css"; // plasmic-import: wsu9Jbk2t-1HP/css

export type PlasmicPerfScore__VariantMembers = {};
export type PlasmicPerfScore__VariantsArgs = {};
type VariantPropType = keyof PlasmicPerfScore__VariantsArgs;
export const PlasmicPerfScore__VariantProps = new Array<VariantPropType>();

export type PlasmicPerfScore__ArgsType = {
  title?: React.ReactNode;
  metric?: React.ReactNode;
  description?: React.ReactNode;
  unit?: React.ReactNode;
};

type ArgPropType = keyof PlasmicPerfScore__ArgsType;
export const PlasmicPerfScore__ArgProps = new Array<ArgPropType>(
  "title",
  "metric",
  "description",
  "unit"
);

export type PlasmicPerfScore__OverridesType = {
  root?: p.Flex<"div">;
  titleContainer?: p.Flex<"h2">;
  metricsContainer?: p.Flex<"div">;
  smallScoreCard?: p.Flex<typeof SmallScoreCard>;
  separator?: p.Flex<typeof Separator>;
  h3?: p.Flex<"h3">;
};

export interface DefaultPerfScoreProps {
  title?: React.ReactNode;
  metric?: React.ReactNode;
  description?: React.ReactNode;
  unit?: React.ReactNode;
  className?: string;
}

function PlasmicPerfScore__RenderFunc(props: {
  variants: PlasmicPerfScore__VariantsArgs;
  args: PlasmicPerfScore__ArgsType;
  overrides: PlasmicPerfScore__OverridesType;
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
      <div className={classNames(defaultcss.all, sty.box__muRmm)}>
        <h2
          data-plasmic-name={"titleContainer"}
          data-plasmic-override={overrides.titleContainer}
          className={classNames(defaultcss.h2, sty.titleContainer)}
        >
          <p.PlasmicSlot
            defaultContents={"First Contentful Paint"}
            value={args.title}
            className={classNames(sty.slotTitle)}
          />
        </h2>

        <div
          data-plasmic-name={"metricsContainer"}
          data-plasmic-override={overrides.metricsContainer}
          className={classNames(defaultcss.all, sty.metricsContainer)}
        >
          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(defaultcss.all, sty.box__vq3Ou)}
          >
            <p.PlasmicSlot
              defaultContents={"2.4"}
              value={args.metric}
              className={classNames(sty.slotMetric)}
            />

            <p.PlasmicSlot
              defaultContents={"s"}
              value={args.unit}
              className={classNames(sty.slotUnit)}
            />
          </p.Stack>

          <SmallScoreCard
            data-plasmic-name={"smallScoreCard"}
            data-plasmic-override={overrides.smallScoreCard}
            className={classNames("__wab_instance", sty.smallScoreCard)}
          />
        </div>
      </div>

      <Separator
        data-plasmic-name={"separator"}
        data-plasmic-override={overrides.separator}
        className={classNames("__wab_instance", sty.separator)}
      />

      <h3
        data-plasmic-name={"h3"}
        data-plasmic-override={overrides.h3}
        className={classNames(defaultcss.h3, sty.h3)}
      >
        <p.PlasmicSlot
          defaultContents={"When the page's first content is displayed."}
          value={args.description}
          className={classNames(sty.slotDescription)}
        />
      </h3>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "titleContainer",
    "metricsContainer",
    "smallScoreCard",
    "separator",
    "h3"
  ],

  titleContainer: ["titleContainer"],
  metricsContainer: ["metricsContainer", "smallScoreCard"],
  smallScoreCard: ["smallScoreCard"],
  separator: ["separator"],
  h3: ["h3"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<
  T extends NodeNameType
> = typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  titleContainer: "h2";
  metricsContainer: "div";
  smallScoreCard: typeof SmallScoreCard;
  separator: typeof Separator;
  h3: "h3";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicPerfScore__OverridesType,
  DescendantsType<T>
>;

type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicPerfScore__VariantsArgs;
    args?: PlasmicPerfScore__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicPerfScore__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicPerfScore__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicPerfScore__ArgProps,
      internalVariantPropNames: PlasmicPerfScore__VariantProps
    });

    return PlasmicPerfScore__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicPerfScore";
  } else {
    func.displayName = `PlasmicPerfScore.${nodeName}`;
  }
  return func;
}

export const PlasmicPerfScore = Object.assign(
  // Top-level PlasmicPerfScore renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    titleContainer: makeNodeComponent("titleContainer"),
    metricsContainer: makeNodeComponent("metricsContainer"),
    smallScoreCard: makeNodeComponent("smallScoreCard"),
    separator: makeNodeComponent("separator"),
    h3: makeNodeComponent("h3"),

    // Metadata about props expected for PlasmicPerfScore
    internalVariantProps: PlasmicPerfScore__VariantProps,
    internalArgProps: PlasmicPerfScore__ArgProps
  }
);

export default PlasmicPerfScore;
/* prettier-ignore-end */
