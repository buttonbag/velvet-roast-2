import { CallToActionButton } from "components/CallToActionButton";
import { Column } from "components/Column";
import { Columns } from "components/Columns";
import { Cover } from "components/Cover";
import { Heading } from "components/Heading";
import { Paragraph } from "components/Paragraph";
import { ProductSearch } from "components/ProductSearch";
import { FormspreeForm } from "components/FormspreeForm";
import Image from "next/image";
import { theme } from "theme";
import { ProductProperties } from "components/ProductProperties";
import { Gallery } from "components/Gallery";
import { TickItem } from "components/TickItem";
import { Calendar } from "components/Calendar";
import { Product } from "components/Product";

export const BlockRenderer = ({blocks}) => {
  return blocks.map((block) => {
    switch (block.name) {
      case 'core/gallery': {
        return <Gallery 
        key={block.id} 
        columns={block.attributes.columns || 3}
        cropImages={block.attributes.imageCrop}
        items={block.innerBlocks}
        />
      }
      case 'acf/tickitem': {
        return <TickItem key={block.id}>
          <BlockRenderer blocks={block.innerBlocks} />
        </TickItem>
      }
      case 'acf/product': {
        console.log("PRODUCT: ", block);
        
        return <Product 
          key={block.id} 
          description={block.attributes.data.description}
          image={block.attributes.data.image}
          label={block.attributes.data.label}
          price={block.attributes.data.price}
        />
      }
      // case 'acf/productsearch': {
      //   return <ProductSearch key={block.id} />
      // }
      // case 'acf/propertyfeatures': {
      //   return <ProductProperties 
      //   key={block.id} 
      //   price={block.attributes.price}
      //   description={block.attributes.description}
      //   />
      // }
      case 'acf/formspreeform': {
        return <FormspreeForm 
        key={block.id} 
        formId={block.attributes.data.form_id} />
      }
      case 'acf/ctabutton': {
        console.log("CTA BUTTON: ", block);
        
        return <CallToActionButton 
        key={block.id}
        align={block.attributes.data.align}
        destination={block.attributes.data.destination}
        label={block.attributes.data.label}
        bgColor={block.attributes?.data.bg_color}
        />
      }
      case 'core/paragraph': {
        return <Paragraph 
        key={block.id} 
        // textAlign={block.attributes.style?.typography.textAlign}
        content={block.attributes.content}
        textColor={theme[block.attributes.textColor] || block.attributes.style?.color?.text}
        />
      }
      case 'core/post-title':
      case 'core/heading': {
        return <Heading 
        key={block.id} 
        level={block.attributes.level}
        textAlign={block.attributes.style?.typography?.textAlign}
        content={block.attributes.content}
        />
      }
      case 'core/cover': {
        return (
          <Cover key={block.id} background={block.attributes.url}>
            <BlockRenderer blocks={block.innerBlocks} />
          </Cover>
        );
      }
      case 'core/columns': {        
        return <Columns 
        key={block.id} 
        isStackedOnMobile={block.attributes.isStackedOnMobile}
        textColor={theme[block.attributes?.textColor] || block.attributes?.style?.color?.text}
        backgroundColor={theme[block.attributes?.backgroundColor] || block.attributes?.style?.color?.background}>
          <BlockRenderer blocks={block.innerBlocks} />
        </Columns>
      }
      case 'core/column': {
        console.log("COLUMN: ", block);
        
        return <Column 
        key={block.id}
        width={block.attributes?.width || ""}
        textColor={theme[block.attributes?.textColor] || block.attributes?.style?.color?.text}
        backgroundColor={theme[block.attributes?.backgroundColor] || block.attributes?.style?.color?.background}
        >
          <BlockRenderer blocks={block.innerBlocks} />
        </Column>
      }
      case 'core/block': {
        return <section key={block.id} className="my-10 p-5"><BlockRenderer blocks={block.innerBlocks} /></section>
      }
      case 'core/group': {
        return <BlockRenderer key={block.id} blocks={block.innerBlocks} />
      }
      case 'acf/calendar': {
        return <Calendar key={block.id} dataUrl={block.attributes.data.data_url} />
      }
      case 'core/image': {
        return <Image 
        key={block.id} 
        src={block.attributes.url}
        height={block.attributes.height}
        width={block.attributes.width}
        alt={block.attributes.alt || ""}
      />
      }
      default:
        console.log("UNKNOWN: ", block);
        return null;
    }
  })
}