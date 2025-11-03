// src/content/config.ts
import { z, defineCollection } from 'astro:content';

// "items" という名前のコレクションを定義
const itemsCollection = defineCollection({
  type: 'content', // Markdownファイル（本文）も使う
  schema: z.object({
    id: z.number().describe("ユニークID"),
    name: z.string().describe("アイテム名"),
    price: z.number().min(0).describe("価格 (円)"),
    status: z.enum(['want', 'bought']).describe("ステータス"),
    category: z.string().describe("集計用カテゴリ"),
    priority: z.number().min(1).optional().describe("優先度 (wantの時)"),
    purchase_date: z.date().optional().describe("購入日 (boughtの時)"),
  }),
});

// コレクションをエクスポート
export const collections = {
  'items': itemsCollection,
};
