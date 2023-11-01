class Messages::SearchesController < ApplicationController
  def index
    # ↓検索処理のコード
    @messages = Message.where('title LIKE(?)', "%#{params[:title]}%")

    respond_to do |format|
      format.html { redirect_to :root }
      # ↓検索結果のデータをレスポンスするコード
      format.json { render json: @messages }
    end
  end
end
